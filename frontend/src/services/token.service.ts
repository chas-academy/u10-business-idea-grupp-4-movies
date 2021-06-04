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

    // Verify the token,
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                const apiStrings = Object.values(this.issuer).map((apiString) =>
                    apiString.slice(-10)
                );
                return apiStrings.indexOf(payload.iss.slice(-10)) > -1
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
