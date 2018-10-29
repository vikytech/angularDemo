import { Component, OnInit } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [ FormDetailsProviderService]
})
export class RegistrationFormComponent implements OnInit {

  public formDetails=[];
  public userDetails={};

  constructor( private service : FormDetailsProviderService) { }

  ngOnInit() {
    this.formDetails = this.service.getFormDetails();
    this.userDetails = this.service.getUserDetail();
  }
}