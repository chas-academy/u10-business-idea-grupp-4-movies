import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'app-allusers',
    templateUrl: './allusers.component.html',
    styleUrls: ['./allusers.component.scss'],
})
export class AllUsersComponent implements OnInit {
    constructor(public userService: UsersService) {
        /* functions to be called onInit */
        this.handleUsers();
        this.handleFriendRequests();
        this.handleFriendList();
    }
    users: any; // array with users signed up on moviematcher
    friendRequests: any; // array with friendrequests sent to signed in user
    friends: any; // array with friends for signed in users

    ngOnInit(): void {}

    /* calls user service to get all users */
    handleUsers() {
        const request = this.userService.getUsers();
        request.subscribe((data) => (this.users = data.users));
    }

    /* calls user service to get all friendrequests for
    signed in user */
    handleFriendRequests() {
        const request = this.userService.getFriendRequests();
        request.subscribe((data) => (this.friendRequests = data.friendRequest));
    }

    /* calls user service to get friendlist
    for signed in user */
    handleFriendList() {
        const request = this.userService.getFriendList();
        request.subscribe((data) => (this.friends = data.friendlist));
    }

    /* handles friendrequests sent by signed in user 
    and calls user service */
    handleAddFriend(id) {
        this.userService.sendFriendRequest(id);
    }

    /* triggers on accepting friendrequest, calls 
    user service, then updating friendlist 
    and friendrequestslist */
    handleAcceptRequest(id) {
        this.userService.acceptFriendRequest(id);
        this.handleFriendRequests();
        this.handleFriendList();
    }

    /* triggers on decline friendrequest, 
    calls userservice to delete friendrequest */
    handleDeleteRequest(id) {
        this.userService.deleteRequest(id);
        this.handleFriendRequests();
        this.handleFriendList();
    }
}
