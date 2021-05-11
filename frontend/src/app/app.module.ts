import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { SwipepageComponent } from './components/swipepage/swipepage.component';
import { AddfriendsComponent } from './components/addfriends/addfriends.component';
import { UserpageComponent } from './components/userpage/userpage.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        LandingpageComponent,
        SwipepageComponent,
        AddfriendsComponent,
        UserpageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        GoogleMapsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
