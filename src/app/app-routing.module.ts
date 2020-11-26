import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './service/auth-guard.service';
import { EditappareilcomponentComponent } from './editappareilcomponent/editappareilcomponent.component';
import { UserlistcomponentComponent } from './userlistcomponent/userlistcomponent.component';
import { NewusercomponentComponent } from './newusercomponent/newusercomponent.component';

// localhost:4200/
const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent }, // localhost:4200/appareils
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditappareilcomponentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserlistcomponentComponent },
  { path: 'new-user', component: NewusercomponentComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 // static forRoot(routes: typeof AppRoutingModule): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    //throw new Error("Method not implemented.");
  //}
}
 