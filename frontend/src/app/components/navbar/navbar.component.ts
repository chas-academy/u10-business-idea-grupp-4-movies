import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { AuthStateService } from '../../../services/auth-state.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(
        private auth: AuthStateService,
        public router: Router,
        public token: TokenService
    ) {}
    isSignedIn: boolean;

    ngOnInit() {
        this.auth.userAuthState.subscribe((val) => {
            console.log(val);
            this.isSignedIn = val;
        });
    }
    // Signout
    signOut() {
        this.auth.setAuthState(false);
        this.token.removeToken();
        this.router.navigate(['login']);
    }
}
