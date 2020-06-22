import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
        <Aux>
                <Toolbar />
                <div> SideDrawer, Backdrop </div>
                <main className={classes.Content}>
                        {props.children}
                </main>
        </Aux>
                
)

export default Layout;