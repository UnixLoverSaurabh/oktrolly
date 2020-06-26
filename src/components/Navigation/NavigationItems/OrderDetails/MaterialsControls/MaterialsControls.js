import React from 'react';
import MaterialControl from './MaterialControl/MaterialControl';
import classes from './MaterialsControls.css';

const controls = [
        { label: 'Cement', type: 'cement' },
        { label: 'Sand', type: 'sand' },
        { label: 'Sariya', type: 'sariya' }
]

const MaterialsControls = (props) => (
        <div className={classes.MaterialsControls}>
                <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
                {controls.map(control => (
                        <MaterialControl key={control.label} label={control.label}
                                submitQuantity={(e) => {props.submitQuantityFromOrders(e, control.type)}} />
                ))}

                <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered} >ORDER NOW</button>
        </div>
);

export default MaterialsControls;