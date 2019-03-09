import React, { Component } from 'react';
//import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component
    componentWillUpdate() {
        console.log('[ORDER SUMMARY] willupdate') // TEST TO see when component updates
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <>
                <h3>Your Order</h3>
                <p>Burger with these ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>

                <p>Total COST: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </>
        );
    }
}


export default OrderSummary;