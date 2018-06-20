import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';
 
@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html'
})
 
 
export class LogInComponent implements OnInit { 

    ngOnInit(): void {
        
    }
 
  constructor( private socialAuthService: AuthService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        
            
      }
    );
  }
  
}