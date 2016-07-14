import { Observable } from 'rxjs/Observable';
import { AuthBackend, AuthProviders, FirebaseAuthState, EmailPasswordCredentials } from './auth_backend';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
export declare class FirebaseSdkAuthBackend extends AuthBackend {
    private _webWorkerMode;
    _fbAuth: firebase.auth.Auth;
    constructor(_fbApp: firebase.app.App, _webWorkerMode?: boolean);
    createUser(creds: EmailPasswordCredentials): Promise<FirebaseAuthState>;
    getAuth(): FirebaseAuthState;
    onAuth(): Observable<FirebaseAuthState>;
    unauth(): void;
    authWithCustomToken(token: string): Promise<FirebaseAuthState>;
    authAnonymously(): Promise<FirebaseAuthState>;
    authWithPassword(creds: EmailPasswordCredentials): Promise<FirebaseAuthState>;
    authWithOAuthPopup(provider: AuthProviders, options?: any): Promise<firebase.auth.UserCredential>;
    authWithOAuthRedirect(provider: AuthProviders, options?: any): Promise<void>;
    authWithOAuthToken(credential: firebase.auth.AuthCredential): Promise<FirebaseAuthState>;
    getRedirectResult(): Observable<firebase.auth.UserCredential>;
    private _enumToAuthProvider(providerId);
}
