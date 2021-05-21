import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/userpage/userpage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AllUsersComponent } from './components/allusers/allusers.component';
import { SwipePageComponent } from './components/swipepage/swipepage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: LandingpageComponent, pathMatch: 'full' },
    { path: 'swipe', component: SwipePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
    },
    { path: 'users', component: AllUsersComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
