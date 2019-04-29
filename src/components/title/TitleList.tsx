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

const TitleListSFC: React.SFC<ITitleListProps> = (props: ITitleListProps) => {
  const titleRepo = props.titleStore!;
  const cartRepo = props.cartStore!;

  titleRepo.loadTitles();
  const x: any[] = [];

  const addTitle = (title: ITitle) => () => {
    cartRepo.addTitle(title);
  };

  const titles = titleRepo.titles.map(t => (
    <Title
      key={t.id}
      description={t.description}
      title={t.name}
      format={t.format}
      price={t.price}
      addTitleToCart={addTitle(t)}
    />
  ));

  return <div>{titles}</div>;
};

const TitleList = inject(cartStore, titleStore)(observer(TitleListSFC));
export default TitleList;
