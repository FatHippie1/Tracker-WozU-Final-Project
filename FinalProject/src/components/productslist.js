import React, { Component } from "react";
import "./style.css";
import axios from 'axios';



const Product = props => (
    <tr>
        <td>{props.product.username}</td>
        <td>{props.product.productname}</td>
        <td>{props.product.quantity}</td>
        <td>{props.product.date.substring(0, 10)}</td>
        <td>
            <button id="productbutton" className="btn btn-success" onClick={() => { props.deleteProduct(props.product._id) }}>delete</button>
        </td>
    </tr>
)

export default class ProductsList extends Component {
    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/products/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProduct(id) {
        axios.delete('http://localhost:5000/products/' + id)
            .then(res => console.log(res.data));

        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }

    productList() {
        return this.state.products.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id} />;
        })
    }

    render() {
        return (
            <div id="containerProductList">
                <h3>Inventory Product List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
