import { Component, OnInit, Output } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  public userId;
  
  constructor( private service : FormDetailsProviderService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe( params => { this.userId = params.userId; })
    this.service.getUserDetail(this.userId).subscribe(
      data => {
        this.userDetails=data;
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
      group[element.label] = new FormControl({ value: data[element.label], disabled: false}, this.service.getValidation(element.validation));
    }
    return new FormGroup(group);

  }

}