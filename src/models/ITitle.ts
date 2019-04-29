import { computed, observable } from "mobx";

interface ITitle {
  id: number;
  name: string;
  description: string;
  format: string;
  price: number;
}

class ObservableTitle implements ITitle {
  public id: number;
  public name: string;
  public description: string;
  public format: string;
  @observable public price: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.format = "";
    this.price = 0;
  }
}

export default ITitle;
