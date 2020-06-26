import React, { Component } from 'react';
import CheckoutSummary from '../../components/Navigation/NavigationItems/OrderDetails/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

        state = {
                materials: {
                        cement: 0,
                        sand: 0,
                        sariya: 0
                },
                totalPrice: 0
        }

        componentDidMount() {
                const query = new URLSearchParams(this.props.location.search);
                const materials = {};
                for(let param of query.entries()) {
                        materials[param[0]] = +param[1];        // ['sand', '1']
                }

                this.setState({
                        materials: materials
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
                        </div>
                );
        };
};

export default Checkout;