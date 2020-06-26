import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import OrderDetails from '../../components/Navigation/NavigationItems/OrderDetails/OrderDetails';
import MaterialsControls from '../../components/Navigation/NavigationItems/OrderDetails/MaterialsControls/MaterialsControls';
import Model from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Navigation/NavigationItems/OrderDetails/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const MATERIAL_PRICES = {
        cement: 300,
        sand: 100,
        sariya: 600
}

class Orders extends Component {

        state = {
                materials: {
                        cement: 0,
                        sand: 0,
                        sariya: 0
                },
                totalPrice: 0,
                purchasable: false,
                purchasing: false,
                loading: false
        }

        updatePurchaseState(materials) {
                const sum = Object.keys(materials).map(materialKey => {
                        return materials[materialKey];
                })
                        .reduce((sum, el) => {
                                return sum + el;
                        }, 0);

                this.setState({
                        purchasable: sum > 0
                });
        }

        purchaseHandler = () => {
                this.setState({
                        purchasing: true
                });
        }

        purchaseCancelHandler = () => {
                this.setState({
                        purchasing: false
                });
        }

        purchaseContinueHandler = () => {
                // this.props.history.push('/checkout');

                const queryParams = [];
                for(let i in this.state.materials) {
                        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.materials[i]));
                }
                const queryString = queryParams.join('&');
                this.props.history.push({
                        pathname: '/checkout',
                        search: '?' + queryString
                });

                // this.setState({
                //       loading: true  
                // });

                // const order = {
                //         materials: this.state.materials,
                //         price: this.state.totalPrice,
                //         deliveryMethod: 'fastest'
                // };
                // axios.post('/orders.json', order)
                //         .then(response => {
                //                 console.log(response);
                //                 this.setState({
                //                         loading: false,
                //                         purchasing: false
                //                 });
                //         })
                //         .catch(error => {
                //                 console.log(error);
                //                 this.setState({
                //                         loading: false,
                //                         purchasing: false
                //                 });
                //         });
        }

        quantityHandler = (event, type) => {
                const quantity = event.target.value;

                const updatedMaterials = {
                        ...this.state.materials
                };
                updatedMaterials[type] = quantity;

                const price1 = MATERIAL_PRICES['cement'] * updatedMaterials['cement'];
                const price2 = MATERIAL_PRICES['sand'] * updatedMaterials['sand'];
                const price3 = MATERIAL_PRICES['sariya'] * updatedMaterials['sariya'];

                this.setState({
                        totalPrice: price1 + price2 + price3,
                        materials: updatedMaterials
                })

                this.updatePurchaseState(updatedMaterials);
        }

        render() {
                let orderSummary = <OrderSummary materials={this.state.materials} price={this.state.totalPrice} purchaseCancelled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} />;
                if(this.state.loading) {
                        orderSummary = <Spinner />;
                }
                return (
                        <Aux>
                                <Model show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                                        {orderSummary}
                                </Model>
                                <OrderDetails materials={this.state.materials} />
                                <MaterialsControls materialAdded={this.addMaterialHandler} price={this.state.totalPrice}
                                        submitQuantityFromOrders={this.quantityHandler} purchasable={this.state.purchasable}
                                        ordered={this.purchaseHandler} />
                        </Aux>
                )
        }
};

export default Orders;