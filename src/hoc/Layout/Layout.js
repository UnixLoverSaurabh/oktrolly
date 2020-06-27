import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

        state = {
                showSideDrawer: false
        }

        SideDrawerClosedHandler = () => {
                this.setState({
                        showSideDrawer: false
                })
        }

        sideDrawerToggleHandler = () => {
                this.setState( (prevState) => {
                        return {showSideDrawer: !prevState.showSideDrawer};
                });
        }

        render() {
                return (
                        <Aux>
                                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
                                <div>Backdrop </div>
                                <main className={classes.Content}>
                                        {this.props.children}
                                </main>
                        </Aux>
                                
                )
                
        };
};

export default Layout;