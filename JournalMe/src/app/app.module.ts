import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import { AppComponent } from './app.component';
import { LogInComponent } from '../components/login/login.component';
import { appRouting } from './app.routing';
import { LandingComponent } from '../components/landing/landing.component';
import { UserService } from '../services/user.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NavComponent } from '../components/nav/nav.component';
import { AuthGuard } from '../guards/auth.guard';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("295354893520-88hnl131aoedcu22f2lktfa21e8stun2.apps.googleusercontent.com")
        },
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LandingComponent,
    DashboardComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    appRouting
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
