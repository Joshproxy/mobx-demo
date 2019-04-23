import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import IObservableCartStore from "../../stores/IObservableCartStore";
import { cartStore } from "../../stores/StoreNames";

interface ICartProps {
  cartStore?: IObservableCartStore;
}


@inject(cartStore)
@observer
class Cart extends Component<ICartProps> {
  private cartStore: IObservableCartStore;
  constructor(props: ICartProps) {
    super(props);
    this.cartStore = this.props.cartStore!;
  }
  render() {
    let cartCount = this.cartStore.getCartTotal;
    let currentPrice = this.cartStore.getTotalPrice;

    let clearCart = () => {
      this.cartStore.clearCart();
    };

    return (
      <div>
        <div>
          Cart -- {cartCount} ${currentPrice}
        </div>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    );
  }
}

export default Cart;
