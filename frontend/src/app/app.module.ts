import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import {
    HttpClientJsonpModule,
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SwipepageComponent } from './components/swipepage/swipepage.component';
import { AllUsersComponent } from './components/allusers/allusers.component';
import { UserProfileComponent } from './components/userpage/userpage.component';
import { AuthInterceptor } from '../services/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        LandingpageComponent,
        SwipepageComponent,
        AllUsersComponent,
        UserProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        GoogleMapsModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
