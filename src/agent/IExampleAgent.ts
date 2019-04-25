export interface ExampleModel {
    prop1: number;
    prop2: string;
}

export default interface IExampleAgent {
    getExample: (id: number) => Promise<ExampleModel>;
    postExample: (obj: ExampleModel) => Promise<ExampleModel>;
}