import { Injectable } from "@angular/core";
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angular5-social-login";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/observable/of';

@Injectable()
export class UserService{

    public isLoggedInSubject = new BehaviorSubject<boolean>(this.getIsLoggedIn());
    
    constructor(public socialAuthService: AuthService, private router: Router){
        
    }

    public getUser(): SocialUser{
        return JSON.parse(localStorage.getItem('userLoggedIn'));
    }

    //Login functionality
    public getIsLoggedIn(): boolean{
        let userResult = this.getUser();

        let loggedInBool = userResult != null;

        console.log(loggedInBool);
        
        return loggedInBool;
    }

    public isLoggedIn(): Observable<boolean>{
        return this.isLoggedInSubject.asObservable();
    }

    public logIn(socialPlatform: string): void{
        let socialPlatformProvider;

        if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        }
        else if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }
        
        this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
            console.log(socialPlatform+" sign in data : " , userData);   
            localStorage.setItem('userLoggedIn', JSON.stringify(userData)) ;
            this.isLoggedInSubject.next(this.getIsLoggedIn());

            this.router.navigate(['/dashboard']);
        });
    }

    public logOut(): void {
        localStorage.removeItem('userLoggedIn');
        this.isLoggedInSubject.next(this.getIsLoggedIn());
        this.router.navigate(['/landing']);
    }
}