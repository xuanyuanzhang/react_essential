import React, { Component } from 'react';
import './App.css';
import './index.css';

// Note! here "this.props" can be treated as the parameters taken
// by the function call.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHeaderHidden: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    }

    render() {
        let title = 'Stateful React Component';
        let headerElement = React.createElement('h1', { className:
            'header', key: 'header' }, title);
        let buttonElement = React.createElement('button', { className:
            'btn btn-default', onClick: this.handleClick, key: 'button'},
            'Toggle header');
        if (this.state.isHeaderHidden) {
            return React.createElement('div', null, [ buttonElement ]);
        }
        return React.createElement('div', null, [ buttonElement, headerElement ]);
    }
}

export default App;
