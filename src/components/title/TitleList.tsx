import { inject, observer } from "mobx-react";
import React from "react";
import ITitle from "../../domain/models/ITitle";
import IObservableCartStore from "../../stores/IObservableCartStore";
import IObservableTitleStore from "../../stores/IObservableTitleStore";
import { cartStore, titleStore } from "../../stores/Stores";
import EditableTitle from "./EditableTitle";
import { Title } from "./Title";

interface ITitleListProps {
  titleStore?: IObservableTitleStore;
  cartStore?: IObservableCartStore;
}

@inject(titleStore, cartStore)
@observer
export default class TitleList extends React.Component<ITitleListProps> {
  private titleRepo: IObservableTitleStore;
  private cartRepo: IObservableCartStore;
  constructor(props: ITitleListProps) {
    super(props, null);
    this.titleRepo = props.titleStore!;
    this.cartRepo = props.cartStore!;
    this.titleRepo.loadTitles();
  }

  public addTitle = (title: ITitle) => () => {
    this.cartRepo.addTitle(title);
  };

  public edit = (title: ITitle) => {
    this.titleRepo.editTitle(title);
  };

  public render() {
    return (
      <div>
        {this.titleRepo.titles.map(t => (
          <div key={t.id}>
            <Title
              key={t.id}
              description={t.description}
              title={t.name}
              format={t.format}
              price={t.price}
              addTitleToCart={this.addTitle(t)}
            />
            <EditableTitle key={t.id} title={t} editTitle={this.edit} />
          </div>
        ))}
      </div>
    );
  }
}
