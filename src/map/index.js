import React, { Component } from 'react';
import $ from 'jquery';

import './style.css';

class Map extends Component {

    componentDidMount() {
        $('.map').click(function (e) {
            const pixX = e.pageX - $(this).position().left;
            const pixY = e.pageY - $(this).position().top;

            const percX = pixX / $(this).width();
            const percY = pixY / $(this).height();

            const lat = (percY - 0.5) * -180;
            const long = (percX - 0.5) * 360;

            console.log(lat, long);
        });
    }

    render() {
        return (
            <div className={'map'}>
            </div>
        );
    }

}

export default Map;
