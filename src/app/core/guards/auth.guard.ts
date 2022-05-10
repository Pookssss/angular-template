import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../features/auth/_services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  private checkAuthorized = async (url: string): Promise<boolean> => {
    // const r = await this.auth.isAuthorizedAccess();
    // if (!r) {
    //   localStorage.clear();
    //   this.router.navigateByUrl('/auth');
    //   return false;
    // } else {
    //   return r;
    // }
    const token = localStorage.getItem('token') || '';
    if (token === 'ABCDEFG') {
      return true;
    } else {
      localStorage.clear();
      this.router.navigateByUrl('/auth');
      return false;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkAuthorized(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
}
