import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header className={'header'}>
                <h1 className={'logo'}>Balloon <span>Go</span></h1>
            </header>
        );
    }
}

export default Header;
