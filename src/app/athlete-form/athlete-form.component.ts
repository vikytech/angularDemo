import { Component, OnInit } from '@angular/core';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-athlete-form',
  templateUrl: '../registration-form/registration-form.component.html',
})

export class AthleteFormComponent extends RegistrationFormComponent implements OnInit {
  ngOnInit() {
    this.createForm("athlete")
  }
}