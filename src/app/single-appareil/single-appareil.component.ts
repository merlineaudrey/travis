import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

name: string = 'Appareil';
  status: string = 'Statut';
  id: any;

  constructor(private appareilService: AppareilService,  private route: ActivatedRoute) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+this.id).name;
    this.status = this.appareilService.getAppareilById(+this.id).status;

  }

}
