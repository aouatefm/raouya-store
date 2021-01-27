import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import CartContextProvider from "./components/contexts/cart/CartContext";
import OrderContextProvider from "./components/contexts/order/ordersContext";

ReactDOM.render(
    <OrderContextProvider>
    <CartContextProvider>
        <Router>
        <App />
        </Router>
    </CartContextProvider>
    </OrderContextProvider>,
    document.getElementById('root')
);



