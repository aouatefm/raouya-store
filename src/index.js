import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import CartContextProvider from "./components/contexts/CartContext";
ReactDOM.render(
    <CartContextProvider>
    <Router>
        <App />
    </Router>
    </CartContextProvider>,
    document.getElementById('root')
);



