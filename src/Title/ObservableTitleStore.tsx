import { observable, computed } from 'mobx'
import ITitle from './ITitle';
import IObservableTitleStore from './IObservableTitleStore';

class ObservableTitleStore implements IObservableTitleStore  {
    @observable titles: ITitle[] = [{
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
    }];
}
 const observableTitleStore = new ObservableTitleStore();
 export default observableTitleStore;