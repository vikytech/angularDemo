import { Component, OnInit, Output } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  public formGroup1: FormGroup;
  public formGroup2: FormGroup;
  
  constructor( private service : FormDetailsProviderService) { }
  
  ngOnInit() {
    this.service.getUserDetail().subscribe(
      data => { this.userDetails=data;
        this.functionDetails = this.service.getFormDetails(this.userDetails['functionId']);
        this.formDetails = this.service.getPersonalDetails();        
        this.formGroup1 = this.getFormGroup(this.formDetails, this.userDetails);
        this.formGroup2 = this.getFormGroup(this.functionDetails, this.userDetails['formData']);
     }
     );
  }

  getFormGroup(template, data){
    const group = {};
    for(let element of template) {
      group[element.label]=new FormControl(data[element.label], this.service.getValidation(element.validation));
    }
    return new FormGroup(group);

  }

}