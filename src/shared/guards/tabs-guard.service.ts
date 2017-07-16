import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticlesService } from 'shared/services';

@Injectable()
export class TabsGuard implements CanActivate, CanActivateChild {
  constructor(private articlesService: ArticlesService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let id = route.params['id'];
    return this.checkIsValidArticleId(id)
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  private checkIsValidArticleId(id: string|number): boolean {
    if(this.articlesService.isValidId(id)) return true;

    this.router.navigate(['/']);
    return false;
  }
}