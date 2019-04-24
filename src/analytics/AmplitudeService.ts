import IAnalytics from "./IAnalytics";
import Amplitude, { Identify } from "amplitude-js";
import configurationStore from "../stores/ConfigurationStore";

class AmplitudeService implements IAnalytics {
  private client: Amplitude.AmplitudeClient;

  constructor() {
    this.client = Amplitude.getInstance();
    this.initialize();
  }

  public initialize = () => {
    this.client.init(configurationStore.amplitudeAccountId);
  };

  public logEvent = (name: string, properties?: any, callback?: () => void) => {
    try {
      this.client.logEvent(name, properties, callback);
    } catch (e) {
      console.log("Logging failed: " + e.toString());
    }
  };

  public setUserInfo = (userId: string) => {
    var identity = new Identify();
    identity.set("User Id", userId);
    this.client.identify(identity);
  };
}

const amplitudeService = new AmplitudeService();
export default amplitudeService;
