import React from 'react';
import Aux from '../../../../../hoc/Auxi/Auxi';

const OrderSummary = (props) => {

        const materialSummary = Object.keys(props.materials).map(materialKey => {
                return (<li key={materialKey}>
                        <span>{materialKey}</span>: {props.materials[materialKey]}
                </li>);
        })
        return (
                <Aux>
                        <h3>Your Order</h3>
                        <ul>
                                {materialSummary}
                        </ul>
                </Aux>
        );
};

export default OrderSummary;