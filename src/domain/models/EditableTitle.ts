import { computed, observable } from "mobx";
import ITitle from "./ITitle";

export default class EditableTitle implements ITitle {
  public id: number;
  @observable public name: string;
  @observable public description: string;
  @observable public format: string;
  @observable public price: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.format = "";
    this.price = 0;
  }
}
