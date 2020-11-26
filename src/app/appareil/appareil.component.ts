import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
// import { Status } from '../status.enum';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
   @Input() appareilName: string ;
   @Input() appareilStatus: string ;
   @Input() index: number;
   @Input() id: number;

// enum status
   status: any = {
    ALLUME:'allumé',
    ETEIND: 'éteind'
   };

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {

  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteind') {
      return 'red';
    }
}

onSwitch() {
  if(this.appareilStatus === 'allumé') {
    this.appareilService.switchOffOne(this.index);
  } else if(this.appareilStatus === 'éteind') {
    this.appareilService.switchOnOne(this.index);
  }
}

}
