import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DataTableComponent } from "./data-table/data-table.component";
import { SmartCabinDoorComponent } from './smart-cabin-door/smart-cabin-door.component';
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cabindoor', component: SmartCabinDoorComponent},
  { path: 'data', component: DataTableComponent },
  { path: 'user/:name', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
