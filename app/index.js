import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor';

const root = document.getElementById("app");

if (root) {
    ReactDOM.render(<Editor/>, root);
}