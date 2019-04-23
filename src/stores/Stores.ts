import observableCartStore from "./ObservableCartStore";
import observableTitleStore from "./ObservableTitleStore";

export const cartStore = "cartStore";
export const titleStore = "titleStore";

export const stores = {
  [cartStore]: observableCartStore,
  [titleStore]: observableTitleStore
};

(window as any)._____APP_STATE_____ = stores;
