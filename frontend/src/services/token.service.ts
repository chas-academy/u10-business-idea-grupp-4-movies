import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    api = environment.apiUrl;
    private issuer = {
        login: `${this.api}/login`,
        register: `${this.api}/register`,
    };

    constructor() {}

    handleData(token): void {
        localStorage.setItem('auth_token', token);
    }

    getToken() {
        return localStorage.getItem('auth_token');
    }

    // Verify the token
    isValidToken() {
        const token = this.getToken();
        console.log('from isvalidtoken', token);
        if (token) {
            console.log('from if token', token);
            const payload = this.payload(token);
            if (payload) {
                console.log('payload', payload);
                return Object.values(this.issuer).indexOf(payload.iss) > -1
                    ? true
                    : false;
            }
        }
    }

    payload(token) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }

    // User state based on valid token
    isLoggedIn() {
        return this.isValidToken();
    }

    // Remove token
    removeToken() {
        localStorage.removeItem('auth_token');
    }
}
