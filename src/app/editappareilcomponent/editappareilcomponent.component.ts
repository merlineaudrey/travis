import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../service/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editappareilcomponent',
  templateUrl: './editappareilcomponent.component.html',
  styleUrls: ['./editappareilcomponent.component.scss']
})
export class EditappareilcomponentComponent implements OnInit {
  defaultOnOff = 'éteind';

  constructor(private appareilService: AppareilService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
      const name = form.value['name'];
      const status = form.value['status'];
      this.appareilService.addAppareil(name, status);
      this.router.navigate(['/appareils']);
  }
}

