import React, {Component} from 'react';
import Aux from '../../hoc/Auxi/Auxi'
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import {Route} from 'react-router-dom';
import classes from './Authentication.css';

class Authentication extends Component {
        render() {
                return(
                        <Aux>
                                <h1 className={classes.Home}>Ok Trolly</h1>
                                <Route path="/signin" component={SignIn} />
                                <Route path="/signup" exact component={SignUp} />
                        </Aux>
                );
        }
}

export default Authentication;