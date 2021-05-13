import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isSignedIn: boolean;

    constructor() {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
