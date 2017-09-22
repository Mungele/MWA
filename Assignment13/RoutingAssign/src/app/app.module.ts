import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myRoutes } from "./app.routes";
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';
import { DbService } from './db.service';
import { StudentsinfoComponent } from './studentsinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StudentsinfoComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
