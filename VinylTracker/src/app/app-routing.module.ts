import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginComponent } from "./modules/auth/components/login/login.component";
import { RegisterComponent } from "./modules/auth/components/register/register.component";
import { DashboardComponent } from "./modules/main/components/dashboard/dashboard.component";
import { ProfileComponent } from "./modules/main/components/profile/profile.component";
import { VinylPageComponent } from "./modules/main/components/vinyl-page/vinyl-page.component";
import { UserGuard } from "./modules/main/services/user.guard";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [UserGuard]},
    {path: 'vinyl/:id', component: VinylPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }