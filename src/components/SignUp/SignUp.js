import React, { Component } from 'react';
import classes from './SignUp.css';
import axios from '../../axios-orders.js';
import Spinner from '../UI/Spinner/Spinner';

class SignUp extends Component {

        state = {
                username: '',
                password: '',
                loading: false
        }

        SubmitDataHandler = (props) => {
                this.setState({
                        loading: true
                });
                
                const userInfo = {
                        username: this.state.username,
                        password: this.state.password
                }
                axios.post('/users.json', userInfo)
                        .then(response => {
                                this.setState({
                                        loading: false
                                });
                        }).catch(error => {
                                this.setState({
                                        loading: false
                                });
                        });

                // alert("Information submitted");
        };

        render() {
                let spin = null;
                if(this.state.loading) {
                        spin = <Spinner />
                }
                return (
                        <div className={classes.login}>
                                <input type="text" placeholder="Username" value={this.state.username} id="username" onChange={(event) => this.setState({
                                        username: event.target.value
                                })} />
                                <input type="password" placeholder="password" value={this.state.password} id="password" onChange={(event) => this.setState({
                                        password: event.target.value
                                })} />
                                <input onClick={this.SubmitDataHandler} type="submit" value="Sign Up" />

                                {spin}
                                <a href="#" class="forgot">forgot password?</a>
                        </div>

                );
        }
};

export default SignUp;