import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()


export class AppareilService{
  appareilsSubject = new Subject<any[]>();


  private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteind'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteind'
        }
      ];

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }

      switchOnAll(i: number){ for(let appareil of this.appareils){
          appareil.status = 'allumé';
        
        }

        //appel de  la méthode emitAppareilSubject
      this.emitAppareilSubject();

      }



      switchOffAll(i: number){ for(let appareil of this.appareils){
        appareil.status = 'éteind';
        
      this.emitAppareilSubject();


        }
      }


switchOnOne(i: number){
         this.appareils[i].status = 'allumé';
          
      this.emitAppareilSubject();


        }
      


      switchOffOne(i: number){
        this.appareils[i].status = 'éteind';
         
      this.emitAppareilSubject();


       }

       getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
    }

    addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
  }

  constructor(private httpClient: HttpClient) { }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://test-229b9.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://test-229b9.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
    }
