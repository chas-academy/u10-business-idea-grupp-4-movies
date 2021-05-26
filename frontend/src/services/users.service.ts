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
    accessToken = localStorage.getItem('accessToken');
    authHeader = `Bearer ${this.accessToken}`;
    contentType = 'application/json';

    getFetchData(headers) {
        const fetchData = {
            headers: new HttpHeaders(headers),
        };
        return fetchData;
    }

    getUsers(): Observable<any> {
        const fetchData = this.getFetchData({ Authorization: this.authHeader });
        return this.http.get(`${this.url}/users`, fetchData);
    }

    getFriendRequests(): Observable<any> {
        const fetchData = this.getFetchData({ Authorization: this.authHeader });
        return this.http.get(`${this.url}/friendRequests`, fetchData);
    }

    sendFriendRequest(id) {
        const fetchData = this.getFetchData({
            Authorization: this.authHeader,
            'Content-Type': this.contentType,
        });
        const request = this.http.post(
            `${this.url}/addfriend/${id}`,
            fetchData
        );
        request.subscribe((message) => message);
    }
}
