import { Component, OnInit } from '@angular/core';
import { FormDetailsProviderService } from '../registration-form/form-details-provider.service';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {

  headers : any[];
  requests : any[];
  constructor(private service : FormDetailsProviderService) {
  }

  ngOnInit() {
    this.service.getRequests().subscribe(data => {
      this.headers = this.service.getPersonalDetails();
      this.requests = data['requests'];
    });
  }
}
