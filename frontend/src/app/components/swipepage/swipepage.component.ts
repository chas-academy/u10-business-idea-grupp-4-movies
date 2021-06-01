import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../swipepage/keyframes';
import { Movie } from '../swipepage/movie';
import { UsersService } from '../../../services/users.service';

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
    friendList: FormGroup;
    friends: any;
    canSwipe: boolean;

    constructor(
        public movieService: MoviesService,
        public fb: FormBuilder,
        public userService: UsersService
    ) {
        this.handleFriendList();

        this.friendList = this.fb.group({
            friend: [],
        });
    }

    ngOnInit() {
        this.startAnimation(event);
    }

    handleFriendList() {
        const request = this.userService.getFriendList();
        request.subscribe((data) => (this.friends = data.friendlist));
    }

    onChange() {
        this.canSwipe = true;
        this.handleMovies();
        console.log(this.friendList.value);
    }

    startAnimation(state) {
        if (!this.animationState) {
            this.animationState = state;
        }
    }

    cardAnimation(value, id) {
        this.index++;
        if (value === 'swiperight') {
            this.handleSwipeMovie(id, this.friendList.value);
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

    handleSwipeMovie(id, friendId) {
        this.movieService.swipeMovie(id, friendId);
    }
}
