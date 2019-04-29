import { inject, observer } from "mobx-react";
import React from "react";
import ITitle from "../../models/ITitle";
import IObservableCartStore from "../../stores/IObservableCartStore";
import IObservableTitleStore from "../../stores/IObservableTitleStore";
import { cartStore, titleStore } from "../../stores/Stores";
import { Title } from "./Title";

interface ITitleListProps {
  titleStore?: IObservableTitleStore;
  cartStore?: IObservableCartStore;
}

@inject(titleStore, cartStore)
@observer
class TitleList extends React.Component<ITitleListProps> {
  public title: string = "Title";
  public description: string = "Description";
  private titleStore: IObservableTitleStore;
  private cartStore: IObservableCartStore;
  constructor(props: ITitleListProps) {
    super(props, null);
    this.titleStore = props.titleStore!;
    this.cartStore = props.cartStore!;
    this.titleStore.loadTitles();
  }

  public render() {
    const x: any[] = [];

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
