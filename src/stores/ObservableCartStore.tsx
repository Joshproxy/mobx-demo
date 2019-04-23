import { observable, computed } from 'mobx'
import ITitle from '../models/ITitle';
import IObservableCartStore from './IObservableCartStore';

class ObservableCartStore implements IObservableCartStore  {
    @observable cartTotal: number = 0;
    @observable items: ITitle[] = [];
    
    @computed get getCartTotal(): number {
        return this.items.length;
    }

    @computed get getTotalPrice(): number {
        let total = 0;
        this.items.forEach(t => {
            total += t.price;
        })
        return total;
    }

    clearCart() {
        this.items = [];
    }

    addTitle(title: ITitle): void
    {
        this.items.push(title);
        console.log(title.name);
    }
}
 const observableOrdersStore = new ObservableCartStore();
 export default observableOrdersStore;