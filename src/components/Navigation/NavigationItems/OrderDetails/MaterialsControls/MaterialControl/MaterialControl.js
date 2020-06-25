import React from 'react';
import NumericInput from 'react-numeric-input';

const MaterialControl = (props) => (
        <div>
                <span>{props.label}</span>
                <input type="text" pattern="[0-9]*" onInput={props.submitQuantity} placeholder="Quantity"/>
        </div>
);

export default MaterialControl;