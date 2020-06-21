import React, {Component} from 'react';
import Aux from '../../hoc/Auxi'
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';

class Authentication extends Component {
        render() {
                return(
                        <Aux>
                                <SignUp></SignUp>
                                <SignIn></SignIn>
                        </Aux>
                );
        }
}

export default Authentication;