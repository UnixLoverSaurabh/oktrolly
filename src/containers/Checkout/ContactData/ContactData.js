import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {

        state = {
                name: '',
                email: '',
                address: {
                        street: '',
                        postalCode: ''
                },
                loading: false
        }

        orderHandler = (event) => {
                event.preventDefault();
                // console.log(this.props.materials);

                this.setState({
                      loading: true  
                });

                const order = {
                        materials: this.props.materials,
                        price: this.props.price,
                        deliveryMethod: 'fastest'
                };
                axios.post('/orders.json', order)
                        .then(response => {
                                this.setState({
                                        loading: false                                });
                        })
                        .catch(error => {
                                console.log(error);
                                this.setState({
                                        loading: false                                });
                        });
        }

        render() {

                return (
                        <div className={classes.ContactData}>
                                <h1>Delivery Address</h1>
                                <form>
                                        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                                        <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                                        <input className={classes.Input} type="text" name="street" placeholder="Street" />
                                        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                                        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                                </form>
                        </div>
                );
        };
};

export default ContactData;