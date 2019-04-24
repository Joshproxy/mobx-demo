import { AmplitudeEventProperty } from "./AmplitudeEventProperties";

export default interface IAmplitudeEvent {
    name: string;
    properties: AmplitudeEventProperty<any>[];
    log(): void;
}
