import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SignalKService } from "./signal-k.service";
import { WindRoseComponent } from './wind-rose/wind-rose.component';
import { VesselDiagramComponent } from './vessel-diagram/vessel-diagram.component';
import { SmartCabinDoorComponent } from './smart-cabin-door/smart-cabin-door.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserThumbnailComponent } from './user-thumbnail/user-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    DataTableComponent,
    WindRoseComponent,
    VesselDiagramComponent,
    SmartCabinDoorComponent,
    UsersComponent,
    UserComponent,
    UserThumbnailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule
  ],
  providers: [SignalKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
