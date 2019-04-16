import ITitle from "../Title/ITitle";

interface IObservableCartStore {
    items: ITitle[];
    cartTotal: number;
    getCartTotal:  number;
    getTotalPrice:  number;
    clearCart: any;
}

export default IObservableCartStore;