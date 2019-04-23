import React from 'react';
import { Title } from "./Title";
import { observer } from 'mobx-react';
import IObservableTitleStore from '../../stores/IObservableTitleStore';
import observableCartStore from '../../stores/ObservableCartStore';
import ITitle from '../../models/ITitle';

@observer
class TitleList extends React.Component<{store: IObservableTitleStore }> {
    title: string = 'Title';
    description: string = 'Description';

    constructor(props: {store: IObservableTitleStore }) {
        super(props, null);
        props.store.loadTitles();
    }
    
    render(): JSX.Element {
        let x: any[] = [];
        let store = observableCartStore;
        
        const addTitle = (title: ITitle) => () => {
            store.addTitle(title);
        }

        this.props.store.titles.map((t) => {
            x.push(<Title
                key={t.id}
                description={t.description}
                title={t.name}
                format={t.format}
                price={t.price}
                addTitleToCart={addTitle(t)}/>)
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