import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { VinylComponent } from './components/vinyl/vinyl.component';
import { VinylPageComponent } from './components/vinyl-page/vinyl-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    VinylComponent,
    VinylPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    VinylComponent,
    VinylPageComponent
  ]
})
export class MainModule { }
