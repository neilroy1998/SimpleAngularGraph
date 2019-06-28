import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DispGraphComponent } from './disp-graph/disp-graph.component';
import { HomeDashServiceService } from './home-dash-service.service';
import { DashDispGraphTypeService } from './dash-disp-graph-type.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    ErrorPageComponent,
    DispGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HomeDashServiceService, DashDispGraphTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
