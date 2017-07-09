import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth: AngularFireAuth, private router: Router){}

  canActivate(): Observable<boolean> {
    return this._auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) this.router.navigate(['/login']);
      });
  }
}