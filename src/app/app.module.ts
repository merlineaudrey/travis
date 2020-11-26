import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { Status } from './status.enum';
import { AppareilService } from './service/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {  AuthGuard } from './service/auth-guard.service';
import { EditappareilcomponentComponent } from './editappareilcomponent/editappareilcomponent.component';
import { UserService } from './service/UserService';
import { UserlistcomponentComponent } from './userlistcomponent/userlistcomponent.component';
import { NewusercomponentComponent } from './newusercomponent/newusercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditappareilcomponentComponent,
    UserlistcomponentComponent,
    NewusercomponentComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule

    
  ],
  providers: [AppareilService,
               AuthService,
              AuthGuard,
            UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
