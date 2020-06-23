import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from '../../axios-orders.js';

class SignUp extends Component {

        state = {
                username: '',
                password: ''
        }

        SubmitDataHandler = (props) => {
                const userInfo = {
                        username: this.state.username,
                        password: this.state.password
                }
                axios.post('/users.json', userInfo)
                        .then(response => {
                                console.log(response);
                        }).catch(error => {
                                console.log(error);
                        });

                alert("Information submitted");
        };

        render() {
                return (
                        <div className={classes.login}>
                                <input type="text" placeholder="Username" value={this.state.username} id="username" onChange={(event) => this.setState({
                                        username: event.target.value
                                })} />
                                <input type="password" placeholder="password" value={this.state.password} id="password" onChange={(event) => this.setState({
                                        password: event.target.value
                                })} />
                                <input onClick={this.SubmitDataHandler} type="submit" value="Sign Up"/>
                                <a href="#" class="forgot">forgot password?</a>
                        </div>
        
                );
        }
};

export default SignUp;