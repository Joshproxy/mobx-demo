import amplitudeService from "../AmplitudeService";
import { AmplitudeEventProperty } from "./AmplitudeEventProperties";
import IAmplitudeEvent from "./IAmplitudeEvent";

export default abstract class AmplitudeEvent implements IAmplitudeEvent {
  name: string;
  properties!: AmplitudeEventProperty<any>[];

  constructor(name: string, ...props: AmplitudeEventProperty<any>[]) {
    this.name = name;
    this.AddProperties(...props);
  }

  protected AddProperties(...props: AmplitudeEventProperty<any>[]) {
    this.properties = props;
  }

  public log(): void {
    var propsDictionary: { [name: string]: any } = {};
    this.properties.forEach(p => (propsDictionary[p.name] = p.value));
    amplitudeService.logEvent(this.name, propsDictionary);
  }
}
