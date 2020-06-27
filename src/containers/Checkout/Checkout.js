import React, { Component } from 'react';
import CheckoutSummary from '../../components/Navigation/NavigationItems/OrderDetails/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

        state = {
                materials: null,
                totalPrice: 0
        }

        componentWillMount() {
                const query = new URLSearchParams(this.props.location.search);
                const materials = {};
                let price = 0;
                for(let param of query.entries()) {
                        if(param[0] === 'price') {
                                price = param[1];
                        }
                        else {
                                materials[param[0]] = +param[1];        // ['sand', '1']
                        }
                }

                this.setState({
                        materials: materials,
                        totalPrice: price
                });
        }
        
        CheckoutSummaryCancelled = () => {
                this.props.history.goBack();
        }

        CheckoutSummaryContinued = () => {
                this.props.history.replace('/checkout/contact-data');
        }

        render() {

                return(
                        <div>
                                <CheckoutSummary materials={this.state.materials} CheckoutSummaryCancelled={this.CheckoutSummaryCancelled} CheckoutSummaryContinued={this.CheckoutSummaryContinued} />
                                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData materials={this.state.materials} price={this.state.totalPrice} {...props} />)} />
                        </div>
                );
        };
};

export default Checkout;