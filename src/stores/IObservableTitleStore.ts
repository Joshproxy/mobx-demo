import ITitle from "../models/ITitle";

interface IObservableTitleStore {
  loadTitles: () => void;
  titles: ITitle[];
  loading: boolean;
  count: number;
}

export default IObservableTitleStore;
