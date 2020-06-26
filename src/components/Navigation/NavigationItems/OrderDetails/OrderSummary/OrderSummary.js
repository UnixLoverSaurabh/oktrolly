import React, { Component } from 'react';
import Aux from '../../../../../hoc/Auxi/Auxi';
import Button from '../../../../UI/Button/Button';

class OrderSummary extends Component {

        componentDidUpdate() {
                console.log('[OrderSummery] will update');
        }

        render() {
                const materialSummary = Object.keys(this.props.materials).map(materialKey => {
                        return (<li key={materialKey}>
                                <span>{materialKey}</span>: {this.props.materials[materialKey]}
                        </li>);
                })

                return (
                        <Aux>
                                <h3>Your Order</h3>
                                <ul>
                                        {materialSummary}
                                </ul>
                                <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
                                <p>Continue to Checkout?</p>
                                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
                        </Aux>
                );
        };
};

export default OrderSummary;