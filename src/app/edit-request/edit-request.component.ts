import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegistrationFormComponent as service } from '../registration-form/registration-form.component';

@Component({
  selector: 'edit-request',
  template: `<h1>Coming Soooon</h1>`
  // templateUrl: '../registration-form/registration-form.component.html',
})
export class EditRequestComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // service.preFillForm(parseInt(params.get('id')));
    })
  }

}
