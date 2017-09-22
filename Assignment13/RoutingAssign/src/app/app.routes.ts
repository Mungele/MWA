import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentsComponent } from "./students.component";
import { StudentsinfoComponent } from "./studentsinfo.component";
// import { GuardsComponent } from "./guards/guards.component";
//
// import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
// import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentsinfoComponent },
  // guards need to be initilized, add them to module!
  // canActivate when surfing to route
  // canDeactivate when surfing away from route
  // { path: 'guards', component: GuardsComponent, canActivate:[MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
  // ** for all routes that we don't recognize,
  // Routes served from top to bottom so this should always come last!
  { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
