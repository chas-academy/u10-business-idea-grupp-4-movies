import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
    selector: 'app-swipepage',
    templateUrl: './swipepage.component.html',
    styleUrls: ['./swipepage.component.scss'],
})
export class SwipePageComponent implements OnInit {
    constructor(public movieService: MoviesService) {
        this.handleMovies();
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
