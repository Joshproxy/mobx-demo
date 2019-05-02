import { computed, observable } from "mobx";
import ITitle from "./ITitle";

export default class EditableTitleModel implements ITitle {
  public id: number;
  @observable public name: string;
  @observable public description: string;
  @observable public format: string;
  @observable public price: number;

  constructor(title: ITitle) {
    this.id = title.id;
    this.name = title.name;
    this.description = title.description;
    this.format = title.format;
    this.price = title.price;
  }
}
