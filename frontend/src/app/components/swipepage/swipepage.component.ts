import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../swipepage/keyframes';
import { Subject } from 'rxjs';
import { Movie } from '../swipepage/movie';

@Component({
    selector: 'app-swipepage',
    templateUrl: './swipepage.component.html',
    styleUrls: ['./swipepage.component.scss'],
    animations: [
        trigger('cardAnimator', [
            transition(
                '* => swiperight',
                animate(750, keyframes(kf.swiperight))
            ),
            transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
        ]),
    ],
})
export class SwipePageComponent implements OnInit {
    public movies: Movie[];
    public index = 0;
    @Input()
    animationState: string;

    constructor(public movieService: MoviesService) {
        this.handleMovies();
    }

    ngOnInit() {
        this.startAnimation(event);
    }

    startAnimation(state) {
        if (!this.animationState) {
            this.animationState = state;
        }
    }

    cardAnimation(value, id) {
        this.index++;

        if (value === 'swiperight') {
            this.handleSwipeMovie(id);
        }
    }

    resetAnimationState(state) {
        this.animationState = '';
    }

    handleMovies() {
        const request = this.movieService.getMovies();
        request.subscribe((data) => {
            this.movies = data;
        });
    }

    handleSwipeMovie(id) {
        this.movieService.swipeMovie(id);
    }
}
