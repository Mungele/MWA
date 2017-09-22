import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { StudentsinfoComponent } from "./studentsinfo.component";
//
 import { MyguardGuard } from "./myguard.guard";

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentsinfoComponent, canActivate: [MyguardGuard]
  },
  { path: '**', redirectTo: '' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
