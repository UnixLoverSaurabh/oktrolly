import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import OrderDetails from '../../components/Navigation/NavigationItems/OrderDetails/OrderDetails';
import MaterialsControls from '../../components/Navigation/NavigationItems/OrderDetails/MaterialsControls/MaterialsControls';
import Model from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Navigation/NavigationItems/OrderDetails/OrderSummary/OrderSummary';

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
                purchasing: false
        }

        updatePurchaseState (materials) {
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
               alert('You continue');
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
                return (
                        <Aux>
                                <Model show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                                        <OrderSummary materials={this.state.materials} price={this.state.totalPrice} purchaseCancelled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} />
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