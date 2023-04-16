import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body/body.component';

import { MediaComponent } from './media/media/media.component';
import { PagesComponent } from './pages/pages/pages.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { StaticsComponent } from './statistics/statics/statics.component';
import { SublevelMenuComponent } from './sidenav/sidenav/sublevel-menu.component';



@NgModule({
  declarations: [

    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashbordComponent,
    StaticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
