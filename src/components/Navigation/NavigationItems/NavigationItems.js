import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/auth/signin">Sign In</NavigationItem>
        <NavigationItem link="/auth/signup">Sign Up</NavigationItem>
    </ul>
);

export default NavigationItems;