import ITitle from "../domain/models/ITitle";

interface IObservableTitleStore {
  loadTitles: () => void;
  titles: ITitle[];
  loading: boolean;
  count: number;
  editTitle: (title: ITitle) => ITitle;
}

export default IObservableTitleStore;
