import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html'
})
export class NavComponent{
    
    public isLoggedIn: Observable<boolean>;

    constructor(public userService: UserService, private router: Router){
        this.isLoggedIn = this.userService.isLoggedIn();
    }
  
    public socialSignIn(socialPlatform : string) {
      this.userService.logIn(socialPlatform);
    }

    public socialSignOut(): void{
        this.userService.logOut();
    }
}