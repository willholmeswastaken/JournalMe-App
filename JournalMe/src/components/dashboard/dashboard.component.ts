import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { SocialUser } from "angular5-social-login";


@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{

    public user: SocialUser;

    constructor(private userService: UserService){
        this.user = this.userService.getUser();
    }
}