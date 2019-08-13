import React, { useState, useEffect } from 'react';
import Swiper from '../components/Swiper/SimpleSwiper';
import * as XLSX from 'xlsx';

/**
 * Created by sunyf-c on 2019/8/13.
 */

function Home() {
    const [dataArr, setDataArr] = useState([
        {
            "plate":"营销",
            "dimension":"出锁产值",
            "name":"合计出锁产值（万）",
            "flag": 42718,
            "finished":72.96,
            "total": 31165.6,
            "data": [1180.1, 1074.4, 5339.0, 6538.0, 9872.5, 3791.9, 3369.8],
        },
        {
            "plate":"",
            "dimension":"",
            "name":"数据包出锁产值（万）",
            "flag":"——",
            "finished": null,
            "total": 10553.5,
            "data": [460.9, 333.4, 1720.2, 2083.4, 3542.6, 1300.0, 1113.0]
        },
        {
            "plate":"",
            "dimension":"",
            "name":"广材网出锁产值（万）",
            "flag":"——",
            "finished": null,
            "total": 18654.8,
            "data": [646.2, 673.8, 3347.1, 4032.0, 5763.0, 2264.4, 1928.3]
        },
        {
            "plate":"",
            "dimension":"",
            "name":"人工询价出锁产值（万）",
            "flag":"——",
            "finished": null,
            "total": 1683.0,
            "data": [60.8, 57.3, 241.1, 361.1, 480.7, 185.3, 296.8]
        }]);

    useEffect(() => {
        console.log(dataArr)
    });

    const onImportExcel = file => {
        // 获取上传的文件对象
        const { files } = file.target;
        // 通过FileReader对象读取文件
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const { result } = event.target;
                // 以二进制流方式读取得到整份excel表格对象
                const workbook = XLSX.read(result, { type: 'binary' });
                // 存储获取到的数据
                let data = [];
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                for (const sheet in workbook.Sheets) {
                    // esline-disable-next-line
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        // break; // 如果只取第一张表，就取消注释这行
                    }
                }

                // 最终获取到并且格式化后的 json 数据
                const arr = [];

                for (let i = 0; i < 12; i ++) {
                    arr.push(i + 1 + '月');
                }

                const uploadData = data.map(item => {
                    const newArr = [];

                    arr.forEach(arrItem => {
                        newArr.push(item[arrItem] !== undefined ? parseInt(item[arrItem]) : 0);
                    })

                    return {
                        plate : item['板块'],
                        dimension : item['维度'],
                        name: item['指标项'],
                        flag: item['目标'],
                        finished: item['目标完成率'],
                        total: item['年度累计'],
                        data: newArr
                    }
                })
                setDataArr(dataArr => Object.assign(dataArr, uploadData));
                console.log(dataArr); //这里得到了后端需要的json数据，调用接口传给后端就行了
                console.log('上传成功！');
            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                console.log('文件类型不正确！');
            }
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
    }
    
    return (
        <div className="home">
            <input className="uploader" type='file' accept='.xlsx, .xls' onChange={onImportExcel} />
            <Swiper dataArr={dataArr} />
        </div>
    )
};

export default Home;