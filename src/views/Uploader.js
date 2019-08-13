import React from 'react';
import * as XLSX from 'xlsx';

function Uploader() {
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
                //上传数据操作
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
        <div className="uploader">
            <input className="uploader" type='file' accept='.xlsx, .xls' onChange={onImportExcel} />
        </div>
    )
}

export default Uploader;