import React from 'react';
import Materials from './Materials/Materials';
import classes from './OrderDetails.css';

const OrderDetails = (props) => {

        let transformedMaterials = Object.keys(props.materials).map(materialKey => {
                return [...Array(props.materials[materialKey])].map((_, i) => {
                        return <Materials key={materialKey + i} type={materialKey} />;
                });
        }).reduce((arr, el) => {
                return arr.concat(el)
        }, []);

        if(transformedMaterials.length === 0) {
                transformedMaterials = <p>Please start adding materials</p>
        }
        return (
                <div className={classes.OrderDetails}>
                        {/* <Materials type="cement" /> */}
                        {transformedMaterials}
                </div>
        );
};

export default OrderDetails;