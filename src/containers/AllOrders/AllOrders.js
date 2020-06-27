import React, { Component } from 'react';
import Order from '../../components/Navigation/NavigationItems/Order/Order';

class AllOrders extends Component {
        render() {
                return (
                        <div>
                                <Order />
                                <Order />
                        </div>
                );
        };
;}

export default AllOrders;