import { computed, observable } from "mobx";
import ITitle from "../domain/models/ITitle";
import IObservableCartStore from "./IObservableCartStore";

class ObservableCartStore implements IObservableCartStore {
  public name = "cartStore";
  @observable public cartTotal: number = 0;
  @observable public items: ITitle[] = [];

  @computed get getCartTotal(): number {
    return this.items.length;
  }

  @computed get getTotalPrice(): number {
    let total = 0;
    this.items.forEach(t => {
      total += t.price;
    });
    return total;
  }

  public clearCart() {
    this.items = [];
  }

  public addTitle(title: ITitle): void {
    this.items.push(title);
    console.log(title.name);
  }
}
const observableOrdersStore = new ObservableCartStore();
export default observableOrdersStore;
