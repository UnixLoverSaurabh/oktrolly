import React from 'react';
import classes from './MaterialControl.css';

const MaterialControl = (props) => (
        <div className={classes.MaterialControl}>
                {/* <span>{props.label}</span> */}
                <input type="text" pattern="[0-9]*" onInput={props.submitQuantity} placeholder={'Quantity of ' + props.label} />
        </div>
);

export default MaterialControl;