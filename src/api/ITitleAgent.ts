import ITitle from "../domain/models/ITitle";

export default interface ITitleAgent {
  getTitles: (search: any) => Promise<ITitle[]>;
  getTitle: (id: number) => Promise<ITitle>;
  postTitle: (obj: ITitle) => Promise<ITitle>;
}
