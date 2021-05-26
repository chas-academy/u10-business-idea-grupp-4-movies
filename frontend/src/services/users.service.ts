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

    sendFriendRequest(user): Observable<any> {
        // const { id } = user;
        // const requestBody = { id: id };
        console.log(user);
        const fetchData = this.getFetchData({ Authorization: this.authHeader });
        return this.http.post(`${this.url}/addfriend`, user, fetchData);
    }

    // sendFriendRequest(user): Observable<any> {
    //     const headers = new HttpHeaders();
    //     const requestBody = user;
    //     console.log(requestBody);
    //     return this.http.post(`${this.url}/addfriend`, requestBody, {
    //         headers: headers,
    //     });
    // }
}
