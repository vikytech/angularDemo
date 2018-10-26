import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  name = new FormControl('');
  age = new FormControl('');
  gender = new FormControl('');
  description = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
