import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoutes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'landing', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', component: LandingComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);