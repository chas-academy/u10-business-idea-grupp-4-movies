import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

// User interface
export class User {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}
    api = environment.apiUrl; // holds api url

    // User registration
    register(user: User): Observable<any> {
        return this.http.post(`${this.api}/register`, user);
    }

    // Login
    signin(user: User): Observable<any> {
        return this.http.post<any>(`${this.api}/login`, user);
    }

    // Access user profile
    profileUser(): Observable<any> {
        return this.http.get(`${this.api}/user-profile`);
    }
}
