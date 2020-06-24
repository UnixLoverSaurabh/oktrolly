import React, {Component} from 'react';
import Aux from '../../hoc/Auxi/Auxi'
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import {Route} from 'react-router-dom';

class Authentication extends Component {
        render() {
                return(
                        <Aux>
                                <Route path="/signin" component={SignIn} />
                                <Route path="/signup" exact component={SignUp} />
                        </Aux>
                );
        }
}

export default Authentication;