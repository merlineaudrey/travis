import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

        export class AppareilViewComponent implements OnInit, OnDestroy {
  
        appareils: any[];
        index: any;
        isAuth = false;
        id: any;
        appareilSubscription: Subscription;

        lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
        () => {
          resolve(date);
        }, 2000
        );
        });

        constructor(private appareilService: AppareilService) { }


        ngOnInit() {
          
          this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
            (appareils: any[]) => {
              this.appareils = appareils;
            }          

          );

          this.appareilService.emitAppareilSubject();

        }

        onAllumer() { 
        for(let appareil of this.appareils){
        console.log('On allume tout');

        this.appareilService.switchOnAll(this.index);
        }
      }

        onEteindre() {
          for(let appareil of this.appareils){
            if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
              this.appareilService.switchOffAll(this.index);
            } else {
              return null;  
            }   
          }         
        }

        ngOnDestroy(): void {
           this.appareilSubscription.unsubscribe();

        }

        onSave() {
          this.appareilService.saveAppareilsToServer();
      }

      onFetch() {
        this.appareilService.getAppareilsFromServer();
    }
    }


    
