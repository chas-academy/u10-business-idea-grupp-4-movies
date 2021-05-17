import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isSignedIn: boolean;

    constructor(private auth: AuthStateService) {}
    ngOnInit(): void {
        this.auth.userAuthState.subscribe((val) => {
            this.isSignedIn = val;
        });
        throw new Error('Method not implemented.');
    }
}
