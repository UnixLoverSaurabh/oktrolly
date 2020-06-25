import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import OrderDetails from '../../components/Navigation/NavigationItems/OrderDetails/OrderDetails';
import MaterialsControls from '../../components/Navigation/NavigationItems/OrderDetails/MaterialsControls/MaterialsControls';

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
                totalPrice: 0
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
        }

        render() {
                return (
                        <Aux>
                                <OrderDetails materials={this.state.materials} />
                                <MaterialsControls materialAdded={this.addMaterialHandler} price={this.state.totalPrice}
                                        submitQuantityFromOrders={this.quantityHandler} />
                        </Aux>
                )
        }
};

export default Orders;