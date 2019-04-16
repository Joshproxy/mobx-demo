import { observable, computed } from 'mobx'
import ITitle from './ITitle';
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
        description: 'Cool Description',
        format: 'Online',
        id: 2,
        name: 'Red Book',
        price: 20
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