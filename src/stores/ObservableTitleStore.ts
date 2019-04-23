import { observable, computed } from 'mobx'
import ITitle from '../models/ITitle';
import IObservableTitleStore from './IObservableTitleStore';

class ObservableTitleStore implements IObservableTitleStore {

    @observable public titles: ITitle[] = [];
    @observable public loading: boolean = true;

    private mockedTitles = [{
        description: 'Cool Description',
        format: 'Online',
        id: 1,
        name: 'Red Book',
        price: 20
    },
    {
        description: 'Another Cool Description',
        format: 'Offline',
        id: 2,
        name: 'Blue Book',
        price: 30
    }]

    public loadTitles = (): Promise<void> => {
        this.loading = true;
        return new Promise<ITitle[]>(resolve =>
            setTimeout(resolve, 200, this.mockedTitles)
        ).then(titles => {
            this.loading = false;
            this.titles = titles;
        });
    }
}
const observableTitleStore = new ObservableTitleStore();
export default observableTitleStore;