import ITitle from "./ITitle";

interface IObservableTitleStore {
    loadTitles: () => void;
    titles: ITitle[];
    loading: boolean;
}

export default IObservableTitleStore;