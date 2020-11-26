import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/UserService';
import { User } from '../models/User.model';


@Component({
  selector: 'app-newusercomponent',
  templateUrl: './newusercomponent.component.html',
  styleUrls: ['./newusercomponent.component.scss']
})
export class NewusercomponentComponent implements OnInit {

  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder,  private userService: UserService,
    private router: Router) { }

  ngOnInit() {
     
    this.initForm();

  }
  initForm() {

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])

    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      
      formValue['hobbies'] ? formValue['hobbies'] : []

    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
}

onAddHobby() {
  const newHobbyControl = this.formBuilder.control(null, Validators.required);
  this.getHobbies().push(newHobbyControl);
}

}
