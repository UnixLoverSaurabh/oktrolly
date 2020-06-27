import React, { Component } from 'react';
import propTypes from 'prop-types';

class Materials extends Component {
        render() {
                let material = null;
                switch (this.props.type) {
                        case ('cement'):
                                material = (
                                        <div>
                                                <h2>Cement</h2>
                                        </div>
                                );
                                break;
                        case ('sand'):
                                material = (
                                        <div>
                                                <h2>Sand</h2>
                                        </div>
                                );
                                break;
                        case ('sariya'):
                                material = (
                                        <div>
                                                <h2>Sariya</h2>
                                        </div>
                                );
                                break;
                        default:
                                material = null;
                }
                return material;
        }
};

Materials.propTypes = {
        type: propTypes.string.isRequired
};

export default Materials;