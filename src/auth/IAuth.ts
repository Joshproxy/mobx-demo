export default interface IAuth {
  isAuthenticated: () => boolean;
  getAccessToken: () => string;
}
