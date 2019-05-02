import { computed, observable } from "mobx";
import ITitle from "../domain/models/ITitle";
import titleAgent from "../domain/TitleAgent";
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

  public editTitle = (title: ITitle): ITitle => {
    this.titles.splice(this.titles.findIndex(t => t.id === title.id), 1, {
      ...title
    });
    return title;
  };
}
const observableTitleStore = new ObservableTitleStore();
export default observableTitleStore;
