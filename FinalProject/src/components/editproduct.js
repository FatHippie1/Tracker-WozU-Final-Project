import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class EditProducts extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            productname: '',
            quantity: 0,
            date: new Date(),
            users: []

        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/products/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    productname: response.data.productname,
                    quantity: response.data.quantity,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })


        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),

                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeProductname(e) {
        this.setState({
            productname: e.target.value
        });
    }
    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const product = {
            username: this.state.username,
            productname: this.state.productname,
            quantity: this.state.quantity,
            date: this.state.date
        }
        console.log(product);

        axios.post('http://localhost:5000/products/update' + this.props.match.params.id, product)
            .then(res => console.log(res.data));

        //window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.productname}
                            onChange={this.onChangeProductname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Product Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}