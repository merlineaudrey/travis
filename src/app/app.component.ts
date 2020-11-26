import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './service/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';
import { User } from './models/User.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appareils: any [];
  isAuth: any;
  secondes: number;
  counterSubscription: Subscription;



  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareilSubscription: Subscription;



  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
  ngOnInit(){

      this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(this.maFonction);         
      //observables
      const counter = Observable.interval(1000);

      counter.subscribe(
        (value) => {
          this.secondes = value;
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete!');
        }
      );

  }
  
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  maFonction(appareils: any[]) {
    this.appareils = appareils;
  }

  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
];

}
