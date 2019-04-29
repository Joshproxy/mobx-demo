import { computed, observable } from "mobx";
import titleAgent from "../agent/TitleAgent";
import ITitle from "../models/ITitle";
import IObservableTitleStore from "./IObservableTitleStore";

class ObservableTitleStore implements IObservableTitleStore {
  @observable public titles: ITitle[] = [];
  @observable public loading: boolean = true;

  @computed get count(): number {
    return this.titles.length;
  }

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
