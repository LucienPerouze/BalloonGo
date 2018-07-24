import React, { Component } from 'react';
import $ from 'jquery';

import './style.css';
import background from './map.png';

var getBackgroundImageSize = function(el) {
    var imageUrl = $(el).css('background-image').match(/^url\(["']?(.+?)["']?\)$/);
    var dfd = new $.Deferred();

    if (imageUrl) {

    } else {
        dfd.reject();
    }

    return dfd.then(function() {
        return { width: this.width, height: this.height };
    });
};

class Map extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: null,
            height: null,
            x: null,
            y: null,
        }
    }

    componentDidMount() {

        const mapComponent = this;

        const calcMapWidth = mapImage => {
            const containerWidth = $('.map').width();
            const containerHeight = $('.map').height();
            const containerRatio = containerHeight ? containerWidth / containerHeight : 0;

            const mapRatio = mapImage.height ? mapImage.width / mapImage.height : 0;

            if (containerRatio > mapRatio) {

                const width = containerHeight * mapRatio;

                this.setState({
                    width,
                    height: containerHeight,
                    x: (containerWidth - width) / 2,
                    y: 0
                });

            } else {
                const height = containerWidth / mapRatio;

                this.setState({
                    width: containerWidth,
                    height,
                    x: 0,
                    y: (containerHeight - height) / 2
                });
            }
        };

        const image = new Image();
        image.src = background;

        image.onload = function () {

            calcMapWidth(this);

            console.log(mapComponent.state);

            $('.hitBox').click(function (e) {
                const pixX = e.pageX - $(this).parent().position().left - mapComponent.state.x;
                const pixY = e.pageY - $(this).parent().position().top - mapComponent.state.y;

                const percX = pixX / $(this).width();
                const percY = pixY / $(this).height();

                const lat = (percY - 0.5) * -180;
                const long = (percX - 0.5) * 360;

                console.log(lat, long);
            });

        };

    }

    render() {
        return (
            <div className={'map'} style={{backgroundImage: `url(${background})`}}>
                <div className={'hitBox'} style={{width:this.state.width, height:this.state.height,left:this.state.x,top:this.state.y}}>
                </div>
            </div>
        );
    }

}

export default Map;
