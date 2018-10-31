import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsProviderService {

  URL= 'http://localhost:3000/users/2';

  constructor(public _httpClient : HttpClient) {
  }

  public template =   { 
    "personalData":[
      {
        "label": "firstName",
        "type"  : "text"
      },
       {
        "label": "lastName",
        "type"  : "text"
      },
      {
        "label":"age",
        "type": "number"
      },
      {
        "label":"gender",
        "type": "dropdown",
        "options" : [
          "Male","Female" 
        ]
      }
    ],
    "journalist": [
    {
        "label":"magazine",
        "type":"text"
    }
    ],
    "athlete": [
      {
          "label":"height",
          "type": "number"
      },
      {
        "label": "weight",
        "type": "number"
      }
    ]
}
  getFormDetails(functionId: string){
    return this.template[functionId]
  }
  getPersonalDetails(){
    return this.template["personalData"]
  }

  getUserDetail(): Observable<User> {
      return this._httpClient.get(this.URL).pipe(
        map(data => new User(data)));
  }
}
