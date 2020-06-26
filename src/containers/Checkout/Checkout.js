import React, { Component } from 'react';
import CheckoutSummary from '../../components/Navigation/NavigationItems/OrderDetails/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

        CheckoutSummaryCancelled = () => {
                this.props.history.goBack();
        }

        CheckoutSummaryContinued = () => {
                this.props.history.replace('/checkout/contact-data');
        }

        render() {

                return(
                        <div>
                                <CheckoutSummary CheckoutSummaryCancelled={this.CheckoutSummaryCancelled} CheckoutSummaryContinued={this.CheckoutSummaryContinued} />
                        </div>
                );
        };
};

export default Checkout;