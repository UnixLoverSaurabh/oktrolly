import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/signin" active>Sign In</NavigationItem>
        <NavigationItem link="/signup">Sign Up</NavigationItem>
    </ul>
);

export default NavigationItems;