import { Component } from '@angular/core';
import { FormDetailsProviderService } from './form-details-provider.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [FormDetailsProviderService]
})
export class RegistrationFormComponent {

  public formDetails=[];
  public functionDetails=[];
  public userDetails={};
  public formGroup1: FormGroup;
  public formGroup2: FormGroup;
  
  constructor(private service : FormDetailsProviderService){ }

  createForm(functionId) {
        this.functionDetails = this.service.getFormDetails(functionId);
        this.formDetails = this.service.getPersonalDetails();
        this.formGroup1 = this.service.getFormGroup(this.formDetails);
        this.formGroup2 = this.service.getFormGroup(this.functionDetails);
  }
}