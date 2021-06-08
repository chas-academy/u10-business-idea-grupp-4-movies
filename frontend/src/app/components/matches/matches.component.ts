import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsersService } from '../../../services/users.service';
import { MoviesService } from '../../../services/movies.service';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
    friends: any; // array with friends
    matchedFriends: FormGroup; // form for select friend, calls selectFriend onChange
    matchedMovies = []; // array with matchedmovies

    constructor(
        public usersService: UsersService,
        public movieService: MoviesService,
        public fb: FormBuilder
    ) {
        this.getFriends(); // calls getFriends onInit
        this.matchedFriends = this.fb.group({
            matchedFriend: [], // sets formControlName
        });
    }

    ngOnInit(): void {}

    /* calls user service to get list of friends */
    getFriends() {
        const request = this.usersService.getFriendList();
        request.subscribe((data) => (this.friends = data.friendlist));
    }

    /* calls movie service to get a list of
    matched movies when a friend is selected */
    selectFriend() {
        const request = this.movieService.getMatchedMovies(
            this.matchedFriends.value
        );
        request.subscribe((data) => (this.matchedMovies = data.matches));
    }
}
