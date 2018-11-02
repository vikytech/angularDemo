import { Component, OnInit } from '@angular/core';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'journalist-form',
  templateUrl: '../registration-form/registration-form.component.html',
})
export class JournalistFormComponent extends RegistrationFormComponent implements OnInit {
  ngOnInit() {
    this.createForm("journalist")
  }
}