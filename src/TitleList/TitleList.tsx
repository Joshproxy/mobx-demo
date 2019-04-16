import React from 'react';
import { Title } from "../Title/Title";
import { observer } from 'mobx-react';
import IObservableTitleStore from '../Title/IObservableTitleStore';
import observableCartStore from '../Cart/ObservableCartStore';

@observer
class TitleList extends React.Component<{store: IObservableTitleStore }> {
    title: string = 'Title';
    description: string = 'Description';
    
    render(): JSX.Element {
        let x: any[] = [];
        let store = observableCartStore;
        let defaultTitle = {
            description: 'Cool Description',
            format: 'Online',
            id: 1,
            name: 'Red Book',
            price: 20
        };

        function addTitle() {
            store.addTitle(defaultTitle);
        }

        this.props.store.titles.map((t) => {
            x.push(<Title
                key={t.id}
                description={t.description}
                title={t.name}
                format={t.format}
                price={t.price}
                addTitleToCart={addTitle}/>)
        })
        
        return(
            <div>
                <div>
                    {x}
                </div>
            </div>
        )
    }
}

export default TitleList;