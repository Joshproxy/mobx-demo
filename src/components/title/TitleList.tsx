import React from "react";
import { Title } from "./Title";
import { observer, inject } from "mobx-react";
import IObservableTitleStore from "../../stores/IObservableTitleStore";
import ITitle from "../../models/ITitle";
import { titleStore, cartStore } from "../../stores/StoreNames";
import IObservableCartStore from "../../stores/IObservableCartStore";

interface ITitleListProps {
  titleStore?: IObservableTitleStore;
  cartStore?: IObservableCartStore;
}


@inject(titleStore, cartStore)
@observer
class TitleList extends React.Component<ITitleListProps> {
  title: string = "Title";
  description: string = "Description";
  private titleStore: IObservableTitleStore;
  private cartStore: IObservableCartStore;
  constructor(props: ITitleListProps) {
    super(props, null);
    this.titleStore = props.titleStore!;
    this.cartStore = props.cartStore!;
    this.titleStore.loadTitles();
  }

  render() {
    let x: any[] = [];

    const addTitle = (title: ITitle) => () => {
      this.cartStore.addTitle(title);
    };

    this.titleStore.titles.map(t => {
      x.push(
        <Title
          key={t.id}
          description={t.description}
          title={t.name}
          format={t.format}
          price={t.price}
          addTitleToCart={addTitle(t)}
        />
      );
    });

    return (
      <div>
        <div>{x}</div>
      </div>
    );
  }
}

export default TitleList;
