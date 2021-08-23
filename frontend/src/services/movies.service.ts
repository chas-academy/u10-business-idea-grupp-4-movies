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
    url = environment.apiUrl; // holds api
    accessToken = localStorage.getItem('accessToken'); // holds signed user token
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
        return this.http.get(`${this.url}/movies`, fetchData);
    }

    /* sends data to backend, adds movie to swipedmovies */
    swipeMovie(id: any, friendId: any) {
        const fetchData = this.getFetchData({
            Authorization: this.authHeader,
            'Content-Type': this.contentType,
        });
        const request = this.http.post(
            `${this.url}/swipe/add/${id}`,
            fetchData
        );
        request.subscribe((message) => message);
        this.isMatched(id, friendId);
    }

    isMatched(id: any, friendId: any) {
        const fetchData = this.getFetchData({
            Authorization: this.authHeader,
            'Content-Type': this.contentType,
        });

        const requestBody = {
            movieId: id,
            userId: friendId,
        };

        const request = this.http.post(
            `${this.url}/match`,
            requestBody,
            fetchData
        );
        request.subscribe((message) => message);
    }

    getMatchedMovies(id): Observable<any> {
        const fetchData = this.getFetchData({
            Authorization: this.authHeader,
            'Content-Type': this.contentType,
        });

        const requestBody = {
            friendId: id,
        };

        return this.http.post(`${this.url}/matches`, requestBody, fetchData);
    }
}
