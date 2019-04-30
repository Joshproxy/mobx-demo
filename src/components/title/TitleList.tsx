import { inject, observer } from "mobx-react";
import React from "react";
import EditableTitle from "../../domain/models/EditableTitle";
import ITitle from "../../domain/models/ITitle";
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
export default class TitleList extends React.Component<ITitleListProps> {
  private titleRepo: IObservableTitleStore;
  private cartRepo: IObservableCartStore;
  private editableTitle: EditableTitle = new EditableTitle();
  constructor(props: ITitleListProps) {
    super(props, null);
    this.titleRepo = props.titleStore!;
    this.cartRepo = props.cartStore!;
    this.titleRepo.loadTitles();
  }

  public addTitle = (title: ITitle) => () => {
    this.cartRepo.addTitle(title);
  };

  public editTitle = (title: ITitle) => () => {
    this.titleRepo.editTitle(title);
  };

  public render() {
    return (
      <div>
        <div>
          {this.titleRepo.titles.map(t => (
            <Title
              key={t.id}
              description={t.description}
              title={t.name}
              format={t.format}
              price={t.price}
              addTitleToCart={this.addTitle(t)}
            />
          ))}
        </div>
      </div>
    );
  }
}
