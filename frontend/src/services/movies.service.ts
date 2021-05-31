import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}
    url = environment.apiUrl;
    accessToken = localStorage.getItem('accessToken');
    authHeader = `Bearer ${this.accessToken}`;
    contentType = 'application/json';

    getFetchData(headers: string | { [name: string]: string | string[] }) {
        const fetchData = {
            headers: new HttpHeaders(headers),
        };
        return fetchData;
    }

    getMovies(): Observable<any> {
        const fetchData = this.getFetchData({ Authorization: this.authHeader });
        return this.http.post(`${this.url}/swipe`, fetchData);
    }

    swipeMovie(id: any, friendId: any) {
        console.log(friendId);
        const fetchData = this.getFetchData({
            Authorization: this.authHeader,
            'Content-Type': this.contentType,
        });
        const request = this.http.post(
            `${this.url}/swipe/add/${id}`,
            fetchData
        );
        request.subscribe((message) => message);

        const requestBody = {
            movieId: id,
            userId: friendId,
        };
        const request2 = this.http.post(
            `${this.url}/match`,
            requestBody,
            fetchData
        );
        request2.subscribe((message) => message);
    }
}
