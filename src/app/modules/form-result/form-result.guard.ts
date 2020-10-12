import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormResultQuery } from '../../state/form.query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormResultGuard implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formResultQuery: FormResultQuery
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let canLoad = false;

    this.formResultQuery.formResult$.pipe(take(1)).subscribe(data => {
      canLoad = data && !!data.name; // todo tmp sorry

      if (!canLoad) {
        this.router.navigate(['main-form'], { relativeTo: this.route.root });
      }
    });
    return canLoad;
  }
}
