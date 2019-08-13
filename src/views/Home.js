import React, { useState, useEffect } from 'react';
import Swiper from '../components/Swiper/SimpleSwiper';

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
            // setDataArr(dataArr.empty())
        })
    
    return (
        <div className="home">
            <Swiper dataArr={dataArr} />
        </div>
    )
};

export default Home;