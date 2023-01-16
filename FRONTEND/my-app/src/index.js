import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import HomePage from './Components/HomePage';
import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import Login from './Components/Login';
import Register from './Components/Register';
import AllProducts from './Components/AllProducts';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>} >
                <Route
                    index
                    element={<HomePage/>} />
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/AddProduct" element={<AddProduct />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/AllProducts" element={<AllProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>);
