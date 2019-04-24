import IConfigurationStore from "./IConfigurationStore";

const environments = {
  local: "local",
  dev: "dev",
  qa: "qa",
  mock: "mock",
  demo: "demo",
  prod: "prod"
};

class ConfigurationStore {
  public static getConfig = (): IConfigurationStore => {
    switch (process.env.REACT_APP_ENV) {
      case environments.prod:
        return ConfigurationStore.prodConfig;
      default:
        return ConfigurationStore.devConfig;
    }
  };

  private static devConfig: IConfigurationStore = {
    amplitudeAccountId: "Dev Amplitude Account Id",
    edgeUrl: "Dev Edge Url"
  };

  private static prodConfig: IConfigurationStore = {
    amplitudeAccountId: "Prod Amplitude Account Id",
    edgeUrl: "Prod Edge Url"
  };
}

const configurationStore = ConfigurationStore.getConfig();
export default configurationStore;
