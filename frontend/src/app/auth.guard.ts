import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthStateService, private router: Router) {}

    canActivate() {
        return this.auth.userAuthState.pipe(
            map((isSignedIn) => {
                if (isSignedIn) {
                    return true;
                } else {
                    return this.router.createUrlTree(['login']);
                }
            })
        );
    }
}
