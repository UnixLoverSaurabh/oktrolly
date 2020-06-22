import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Sign In</NavigationItem>
        <NavigationItem link="/">Sign Out</NavigationItem>
    </ul>
);

export default navigationItems;