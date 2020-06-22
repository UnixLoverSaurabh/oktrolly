import React from 'react';
import classes from './Logo.css';
import logo from '../../assets/images/logo.png';

const Logo = (props) => (
        <div classes={classes.Logo}>
                <img src={logo} alt="Ok Trolly" />
        </div>
);

export default Logo;