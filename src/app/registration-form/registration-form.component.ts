import { Component, OnInit, Output } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [ FormDetailsProviderService]
})
export class RegistrationFormComponent implements OnInit {

  public formDetails=[];
  public functionDetails=[];
  public userDetails={};

  constructor( private service : FormDetailsProviderService) { }

  ngOnInit() {
     this.service.getUserDetail().subscribe(
       data => { this.userDetails=data;
         this.functionDetails = this.service.getFormDetails(this.userDetails['functionId']);
         this.formDetails = this.service.getPersonalDetails();
     }
     );
  }
}