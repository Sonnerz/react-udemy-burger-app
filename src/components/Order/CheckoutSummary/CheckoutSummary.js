import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    console.log("props.ingredients:::::", props.ingredients);
    return (
        <div className={classes.CheckoutSummary}>
            <h1>WE hope its good</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />

            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINEUE</Button>
        </div>
    );
};

export default checkoutSummary;