import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    errors = null;

    constructor(
        public router: Router,
        public fb: FormBuilder,
        public authService: AuthService
    ) {
        this.registerForm = this.fb.group({
            name: [''],
            email: [''],
            password: [''],
            password_confirmation: [''],
        });
    }

    ngOnInit() {}

    onSubmit() {
        this.authService.register(this.registerForm.value).subscribe(
            (result) => result,
            (error) => {
                this.errors = error.error;
            },
            () => {
                this.registerForm.reset();
                this.router.navigate(['login']);
            }
        );
    }
}
