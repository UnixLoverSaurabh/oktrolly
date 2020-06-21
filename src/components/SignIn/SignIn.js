import React from 'react';
import classes from './SignIn.css';

const SignIn = (props) => {

        const Submit = (props) => {
                alert("submitted");
        };

        return (
                <div className={classes.login}>
                        <input type="text" placeholder="Username" id="username"/>
                        <input type="password" placeholder="password" id="password"/>
                        <input onClick={Submit} type="submit" value="Sign In"/>
                        <a href="#" class="forgot">forgot password?</a>
                </div>

        );
};

export default SignIn;