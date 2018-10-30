import { Component, OnInit } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

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
     this.service.getUserDetail().subscribe(
       data => {console.log(data); this.userDetails=data; this.formDetails = this.service.getFormDetails(this.userDetails['functionType']);
       console.log(this.userDetails['formData']);
       console.log(this.formDetails['formData']);
     }
     );
  }
}