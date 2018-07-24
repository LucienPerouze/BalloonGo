import React, { Component } from 'react';

import './style.css';
import redBalloon from './red_balloon.png';

class Balloon extends Component {

    render() {
        return (
            <div className={'balloon'}>
              <img src={redBalloon}/>
            </div>
        );
    }

}

export default Balloon;
