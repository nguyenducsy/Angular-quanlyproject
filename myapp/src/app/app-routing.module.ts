import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectComponent } from './admin/project/project.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TaskComponent } from './admin/task/task.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { GuardGuard } from './admin/guard/guard.guard'; //guard route
import { RoleLeaderGuard } from './admin/guard/role-leader.guard';


const routes:Routes = [
  {path: '',  component:HomeComponent }, //default
  {path: 'admin' , component:AdminComponent ,
  children: [
    {path:'' , component:DashboardComponent ,canActivate:[RoleLeaderGuard, GuardGuard]},
    {path:'project', component:ProjectComponent , canActivate:[RoleLeaderGuard , GuardGuard]},
    {path: 'task' , component:TaskComponent , canActivate:[ GuardGuard]},
    {path: 'login' , component:LoginComponent},
    {path: 'register' , component:RegisterComponent},
    

  ]},
  { path: '**', component:PagenotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
