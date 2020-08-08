// Import the react and reactDom libaries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () =>{
    return <div>Hi there !</div>;
};

// Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);