import React from 'react';
import classes from './CheckoutSummary.css';
import Button from '../../../../UI/Button/Button';

const CheckoutSummary = (props) => {
        return (
                <div className={classes.CheckoutSummary}>
                        <h1>We hope to serve you better</h1>
                        <div>

                        </div>
                        <Button btnType="Danger" clicked={props.CheckoutSummaryCancelled} >
                                CANCEL
                        </Button>
                        <Button btnType="Danger" clicked={props.CheckoutSummaryContinued} >
                                CONTINUE
                        </Button>
                </div>
        )
}

export default CheckoutSummary;