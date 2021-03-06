import React, { Component } from 'react';
import '../Styles/Header.css';

let headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
};

class Header extends Component {
    getDefaultProps() {
        return {
            text: 'Default header'
        }
    };

    render() {
        return (
            <h2 style={headerStyle}>{this.props.text}</h2>
        );
    }
}

export default Header;
