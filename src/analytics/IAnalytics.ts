export default interface IAnalytics {
  initialize: (
    accountId: string,
    userId?: string,
    config?: any,
    callback?: () => void
  ) => void;
  logEvent: (name: string, properties?: any, callback?: () => void) => void;
}
