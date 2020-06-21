import React from 'react';
import classes from './SignUp.css';

const SignUp = (props) => {

        const Submit = (props) => {
                alert("submitted");
        };

        return (
                <div className={classes.login}>
                        <input type="text" placeholder="Username" id="username"/>
                        <input type="password" placeholder="password" id="password"/>
                        <input onClick={Submit} type="submit" value="Sign Up"/>
                        <a href="#" class="forgot">forgot password?</a>
                </div>

        );
};

export default SignUp;