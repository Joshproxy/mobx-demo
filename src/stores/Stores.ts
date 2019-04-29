import configurationStore from "./ConfigurationStore";
import IConfigurationStore from "./IConfigurationStore";
import IObservableCartStore from "./IObservableCartStore";
import IObservableTitleStore from "./IObservableTitleStore";
import observableCartStore from "./ObservableCartStore";
import observableTitleStore from "./ObservableTitleStore";

export const cartStore = "cartStore";
export const titleStore = "titleStore";
export const configStore = "configStore";

export interface IStores {
  [cartStore]: IObservableCartStore;
  [titleStore]: IObservableTitleStore;
  [configStore]: IConfigurationStore;
}

export const stores: IStores = {
  [cartStore]: observableCartStore,
  [titleStore]: observableTitleStore,
  [configStore]: configurationStore
};

(window as any)._____APP_STATE_____ = stores;
