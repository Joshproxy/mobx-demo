import React, { Component } from 'react';
import { observer } from 'mobx-react'
import IObservableCartStore from './IObservableCartStore';

@observer
class Cart extends Component<{store: IObservableCartStore }> {
    render() {
        let cartCount = this.props.store.getCartTotal;
        let currentPrice = this.props.store.getTotalPrice;

        let clearCart = () => {
            this.props.store.clearCart();
        }
        
        return (
            <div>
                <div>Cart -- {cartCount} ${currentPrice}</div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            
        )
    }
}

export default Cart;