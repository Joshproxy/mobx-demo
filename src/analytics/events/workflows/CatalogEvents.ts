import * as AmplitudeEventProperties from "../AmplitudeEventProperties";
import AmplitudeEvent from "../AmplitudeEvent";

export class Amplitude_CatalogSearchTriggered extends AmplitudeEvent {
  constructor(cartId: number) {
    super(
      "Catalog - Search Triggered",
      new AmplitudeEventProperties.CartIdProperty(cartId)
    );
  }
}
