import IExampleAgent, { ExampleModel } from "./IExampleAgent";
import IBaseAgent from "./IBaseAgent";
import configurationStore from "../stores/ConfigurationStore";
import BaseAgent from "./BaseAgent";

export default class ExampleAgent implements IExampleAgent {
  private base: IBaseAgent<ExampleModel>;
  constructor() {
    var exampleEndpoint = configurationStore.edgeUrl + "/Example";
    this.base = new BaseAgent(exampleEndpoint);
  }

  getExample = (id: number): Promise<ExampleModel> => {
    return this.base.get(id);
  };

  postExample = (obj: ExampleModel): Promise<ExampleModel> => {
    return this.base.post(obj);
  };
}
