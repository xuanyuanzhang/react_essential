// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


let React = require('react');
let ReactDOM = require('react-dom');

// This shows h1 words "This is React" on homepage
/*
let reactElement = React.createElement('h1', { className: 'header'},
    'This is React');
ReactDOM.render(reactElement, document.getElementById('root'));
*/

// This create a pair of header and content
/*
let h1 = React.createElement('h1', { className: 'header', key: 'header' },
    'This is React');
let p = React.createElement('p', { className: 'content', key: 'content'},
    "And that's how it works.");
let reactFragment = [h1, p];
let section = React.createElement('section', { className: 'container'},
    reactFragment);
ReactDOM.render(section, document.getElementById('root'));
*/

// Using JSX syntax we can directly use HTML code.
/*
let listOfItems = <ul className="list-of-items">
                    <li className="item-1">Item 1</li>
                    <li className="item-2">Item 2</li>
                    <li className="item-3">Item 3</li>
                </ul>


ReactDOM.render(listOfItems, document.getElementById('root'));
*/


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
