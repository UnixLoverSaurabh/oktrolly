import React from 'react';
import classes from './Modal.css';

const Model = (props) => (
        <div className={classes.Modal}>
                {props.children}
        </div>
);

export default Model;