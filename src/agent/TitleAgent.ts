import ITitle from "../models/ITitle";
import configurationStore from "../stores/ConfigurationStore";
import BaseAgent from "./BaseAgent";
import ITitleAgent from "./ITitleAgent";

class TitleAgent extends BaseAgent implements ITitleAgent {
  private titleCache: ITitle[] = [];

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

  constructor() {
    super(configurationStore.edgeUrl + "/Example");
  }

  public getTitles = (query: any): Promise<ITitle[]> => {
    return new Promise<ITitle[]>(resolve =>
      setTimeout(resolve, 200, this.mockedTitles)
    ).then(titles => {
      this.titleCache = titles;
      return titles;
    });
  };

  public getTitle = (id: number): Promise<ITitle> => {
    return this.get<ITitle>(id);
  };

  public postTitle = (obj: ITitle): Promise<ITitle> => {
    return this.post<ITitle>(obj);
  };
}

const titleAgent = new TitleAgent();
export default titleAgent;
