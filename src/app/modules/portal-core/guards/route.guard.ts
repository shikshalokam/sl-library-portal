import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { keyCloakService } from '../services/auth-service/auth.service';
import { CommonServiceService } from '../services/common-service.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  promiseRowData: any;
  rolesArray: any;
  tokendetails: any;
  constructor(private route: Router,
    private keycloakService: keyCloakService, private commonServiceService: CommonServiceService) {

  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // this.promiseRowData = await this.usersService.getUserRoles();
    if (this.promiseRowData['result']) {
      this.rolesArray = this.promiseRowData['result'].roles;
    }
    // this.tokendetails = this.keycloakService.sendToken();
    if (this.tokendetails.token && this.rolesArray.includes("PLATFORM_ADMIN")) {
      return true;
    } else {
      this.route.navigate(['/home']);
      this.commonServiceService.commonSnackBar('Unauthorized user', 'Dismiss', 'top', 10000)
      return false;
    }
  }

}
