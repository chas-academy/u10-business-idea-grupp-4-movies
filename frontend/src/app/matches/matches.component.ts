import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsersService } from '../../services/users.service';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
// import { SwipePageComponent } from '../../app/components/swipepage/swipepage.component';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
    friends: any;
    matchedFriends: FormGroup;
    matchedMovies: any;

    constructor(
        public usersService: UsersService,
        public movieService: MoviesService,
        public fb: FormBuilder
    ) {
        this.getFriends();
        this.matchedFriends = this.fb.group({
            matchedFriend: [],
        });
    }

    ngOnInit(): void {}

    getFriends() {
        const request = this.usersService.getFriendList();
        request.subscribe((data) => (this.friends = data.friendlist));
    }

    selectFriend() {
        const request = this.movieService.getMatchedMovies(
            this.matchedFriends.value
        );
        request.subscribe((data) => (this.matchedMovies = data.matches));
    }
}
