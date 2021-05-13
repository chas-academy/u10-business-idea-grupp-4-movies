import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/login/login.component';
import { SignupComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/userpage/userpage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
    { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'landingpage', component: LandingpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
