import IAuth from './IAuth';

export default class Auth implements IAuth {
    isAuthenticated = () => true;
    getAccessToken = () => 'fakeToken';
}