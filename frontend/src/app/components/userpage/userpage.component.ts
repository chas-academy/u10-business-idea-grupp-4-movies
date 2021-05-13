import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

// User interface
export class User {
    name: string;
    email: string;
}

@Component({
    selector: 'app-userpage',
    templateUrl: './userpage.component.html',
    styleUrls: ['./userpage.component.scss'],
})
export class UserProfileComponent implements OnInit {
    UserProfile: User;

    constructor(public authService: AuthService) {
        this.authService.profileUser().subscribe((data: any) => {
            this.UserProfile = data;
        });
    }

    ngOnInit() {}
}
