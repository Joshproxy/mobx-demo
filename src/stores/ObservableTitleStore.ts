import { observable, computed } from "mobx";
import ITitle from "../models/ITitle";
import IObservableTitleStore from "./IObservableTitleStore";
import titleAgent from "../agent/TitleAgent";

class ObservableTitleStore implements IObservableTitleStore {
  @observable public titles: ITitle[] = [];
  @observable public loading: boolean = true;

  public loadTitles = (): Promise<void> => {
    this.loading = true;
    return titleAgent
      .getTitles({ someSearchField: "someValue" })
      .then(titles => {
        this.titles = titles;
        this.loading = false;
      });
  };
}
const observableTitleStore = new ObservableTitleStore();
export default observableTitleStore;
