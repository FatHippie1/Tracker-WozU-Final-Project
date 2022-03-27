import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import CreateProducts from './components/createproducts';
import CreateUser from './components/createuser';
import ProductsList from './components/productslist';
import EditProducts from './components/editproduct';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path="productslist" element={<ProductsList />} />
          <Route path="createproducts" element={<CreateProducts />} />
          <Route path="/edit/:id" element={<EditProducts />} />
          <Route path="createuser" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
