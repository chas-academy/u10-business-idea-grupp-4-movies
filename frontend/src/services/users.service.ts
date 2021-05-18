import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}
    url = environment.apiUrl;
    accesToken = localStorage.getItem('accessToken');
    authHeader = `Bearer ${this.accesToken}`;
    contentType = 'application/json';

    getFetchData = (headers) => {
        const fetchData = {
            headers: new HttpHeaders(headers),
        };
        return fetchData;
    };

    getUsers(): Observable<any> {
        const fetchData = this.getFetchData({ Authorization: this.authHeader });
        return this.http.post(`${this.url}/users`, fetchData);
    }
}
