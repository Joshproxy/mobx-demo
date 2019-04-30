import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import IObservableCartStore from "../../stores/IObservableCartStore";
import { cartStore } from "../../stores/Stores";

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
  public render() {
    const cartCount = this.cartStore.getCartTotal;
    const currentPrice = this.cartStore.getTotalPrice;

    const clearCart = () => {
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
