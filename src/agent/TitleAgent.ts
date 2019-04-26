import ITitleAgent from "./ITitleAgent";
import configurationStore from "../stores/ConfigurationStore";
import BaseAgent from "./BaseAgent";
import ITitle from "../models/ITitle";

class TitleAgent extends BaseAgent
  implements ITitleAgent {
  private titleCache: ITitle[] = [];

  constructor() {
    super(configurationStore.edgeUrl + "/Example");
  }

  private mockedTitles: ITitle[] = [
    {
      description: "Cool Description",
      format: "Online",
      id: 1,
      name: "Red Book",
      price: 20
    },
    {
      description: "Another Cool Description",
      format: "Offline",
      id: 2,
      name: "Blue Book",
      price: 30
    }
  ];

  getTitles = (query: any): Promise<ITitle[]> => {
    return new Promise<ITitle[]>(resolve =>
      setTimeout(resolve, 200, this.mockedTitles)
    ).then(titles => {
      this.titleCache = titles;
      return titles;
    });
  };

  getTitle = (id: number): Promise<ITitle> => {
    return this.get<ITitle>(id);
  };

  postTitle = (obj: ITitle): Promise<ITitle> => {
    return this.post<ITitle>(obj);
  };
}

const titleAgent = new TitleAgent();
export default titleAgent;