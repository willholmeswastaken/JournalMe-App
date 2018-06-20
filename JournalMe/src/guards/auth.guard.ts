import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private userService: UserService, private router: Router){

    }

    canActivate(): boolean {
        if(this.userService.getIsLoggedIn()){
            return true;
        }
        this.router.navigate(['/landing']);
        return false;
    }
}