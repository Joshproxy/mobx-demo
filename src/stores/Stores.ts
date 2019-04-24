import observableCartStore from "./ObservableCartStore";
import observableTitleStore from "./ObservableTitleStore";
import configurationStore from "./ConfigurationStore";

export const cartStore = "cartStore";
export const titleStore = "titleStore";
export const configStore = "configStore";

export const stores = {
  [cartStore]: observableCartStore,
  [titleStore]: observableTitleStore,
  [configStore]: configurationStore
};

(window as any)._____APP_STATE_____ = stores;
