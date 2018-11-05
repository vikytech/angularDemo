import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormDetailsProviderService } from '../registration-form/form-details-provider.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'edit-request',
  templateUrl: '../registration-form/registration-form.component.html',
})
export class EditRequestComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service : FormDetailsProviderService) {}
  
  public formDetails=[];
  public functionDetails=[];
  public userDetails={};
  public formGroup1: FormGroup;
  public formGroup2: FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.preFillForm(parseInt(params.get('id')));
    })
  }

  preFillForm(userId) {
    this.service.getUserDetail(userId).subscribe(
      data => {
        this.userDetails=data;
        this.functionDetails = this.service.getFormDetails(this.userDetails['functionId']);
        this.formDetails = this.service.getPersonalDetails();
        this.formGroup1 = this.service.getFormGroupWithData(this.formDetails, this.userDetails);
        this.formGroup2 = this.service.getFormGroupWithData(this.functionDetails, this.userDetails['formData']);
     }
     );
  }

}
