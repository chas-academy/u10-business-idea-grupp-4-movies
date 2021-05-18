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
    }
    users: any;

    ngOnInit(): void {}

    handleUsers() {
        const request = this.userService.getUsers();
        request.subscribe((data) => (this.users = data.users));
    }
}