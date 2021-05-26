import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-swipepage',
    templateUrl: './swipepage.component.html',
    styleUrls: ['./swipepage.component.scss'],
})
export class SwipePageComponent implements OnInit {
    parentSubject:Subject<string> = new Subject()

    constructor(public movieService: MoviesService) {
        this.handleMovies();
    }

    cardAnimation(value) {
        this.parentSubject.next(value);
    }

    movies: any;

    ngOnInit(): void {}

    handleMovies() {
        const request = this.movieService.getMovies();
        request.subscribe((data) => {
            console.log(data);
            this.movies = data;
        });
    }
}
