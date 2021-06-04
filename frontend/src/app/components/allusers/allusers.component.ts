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
        this.handleFriendList();
    }
    users: any;
    friendRequests: any;
    friends: any;

    ngOnInit(): void {}

    handleUsers() {
        const request = this.userService.getUsers();
        request.subscribe((data) => (this.users = data.users));
    }

    handleFriendRequests() {
        const request = this.userService.getFriendRequests();
        request.subscribe((data) => (this.friendRequests = data.friendRequest));
    }

    handleFriendList() {
        const request = this.userService.getFriendList();
        request.subscribe((data) => (this.friends = data.friendlist));
    }

    handleAddFriend(id) {
        this.userService.sendFriendRequest(id);
    }

    handleAcceptRequest(id) {
        this.userService.acceptFriendRequest(id);
        this.handleFriendRequests();
        this.handleFriendList();
    }

    handleDeleteRequest(id) {
        this.userService.deleteRequest(id);
        this.handleFriendRequests();
        this.handleFriendList();
    }
}
