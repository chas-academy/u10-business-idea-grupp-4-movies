import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'app-allusers',
    templateUrl: './allusers.component.html',
    styleUrls: ['./allusers.component.scss'],
})
export class AllUsersComponent implements OnInit {
    constructor(public userService: UsersService) {
        this.handleUsers();
        this.handleFriendRequests();
    }
    users: any;
    friendRequests: any;

    ngOnInit(): void {}

    handleUsers() {
        const request = this.userService.getUsers();
        request.subscribe((data) => (this.users = data.users));
    }

    handleFriendRequests() {
        const request = this.userService.getFriendRequests();
        request.subscribe((data) => (this.friendRequests = data.friendRequest));
    }

    handleAddFriend(user) {
        // const request = this.userService.sendFriendRequest(user);
        // request.subscribe((data) => (this.friendRequests = data.friendRequest));
        this.userService.sendFriendRequest(user);
        console.log(user);
    }
}
