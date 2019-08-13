import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import Charts from '../Charts/Charts';
import '../Swiper/swiper.scss';

/**
 * Created by sunyf-c on 2019/8/13.
 */

function SimpleSwiper(props) {

    const params = {
        spaceBetween: 30
    }

    return (
        <Swiper {...params}>
            <div>
                <div className="broad-wrap">
                    <div className="broad-first">
                        <div className="content-wrap">
                            <div className="content">
                                <div className="bullet">
                                    <Charts options={props.dataArr[0]} type="gauge" />
                                </div>
                                <div className="bullet">
                                    <Charts options={props.dataArr[1]} type="gauge" />
                                </div>
                                <div className="bullet">
                                    <Charts options={props.dataArr[2]} type="gauge" />
                                </div>
                                <div className="bullet">
                                    <Charts options={props.dataArr[3]} type="gauge" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>Slide 2</div>
            <div>Slide 3</div>
        </Swiper>
    )
}
   
export default SimpleSwiper;