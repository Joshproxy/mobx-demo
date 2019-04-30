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

const TitleList = inject(cartStore, titleStore)(
  observer((props: ITitleListProps) => {
    const titleRepo = props.titleStore!;
    const cartRepo = props.cartStore!;

    titleRepo.loadTitles();
    const x: any[] = [];

    const addTitle = (title: ITitle) => () => {
      cartRepo.addTitle(title);
    };

    return (
      <div>
        {titleRepo.titles.map(t => (
          <Title
            key={t.id}
            description={t.description}
            title={t.name}
            format={t.format}
            price={t.price}
            addTitleToCart={addTitle(t)}
          />
        ))}
      </div>
    );
  })
);
export default TitleList;

@inject(titleStore, cartStore)
@observer
class TitleListComponent extends React.Component<ITitleListProps> {
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
