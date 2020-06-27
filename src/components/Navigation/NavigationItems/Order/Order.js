import React from 'react';
import classes from './Order.css';

const Order = (props) => (
        <div className={classes.Order}>
                <p>Materials: Sand (1)</p>
                <p>Price: <strong>100</strong></p>
        </div>
);

export default Order;