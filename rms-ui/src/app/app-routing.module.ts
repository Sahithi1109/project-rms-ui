import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { JobComponent } from './component/HR/job/job.component';
import { AddjobComponent } from './component/HR/addjob/addjob.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ViewjobsComponent } from './component/viewjobs/viewjobs.component';
import { JobdetailsComponent } from './component/jobdetails/jobdetails.component';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'landing', component : LandingComponent},
  {path:'profile',component:ProfileComponent},
  {path:'viewjobs',component:ViewjobsComponent},
  {path:'jobdetails',component:JobdetailsComponent},
  {path : 'job',component:JobComponent},
  {path : 'addjob', component : AddjobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
