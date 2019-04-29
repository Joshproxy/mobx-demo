import ITitle from "../models/ITitle";

interface IObservableTitleStore {
  loadTitles: () => void;
  titles: ITitle[];
  loading: boolean;
}

export default IObservableTitleStore;
