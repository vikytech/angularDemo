import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { Validators } from '@angular/forms';

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
        "type"  : "text",
        "validation": [{"required": true, "maxLength": 10}]
      },
       {
        "label": "lastName",
        "type"  : "text",
        "validation": [{"minLength": 10}]
      },
      {
        "label":"age",
        "type": "number"
      },
      {
        "label":"gender",
        "type": "dropdown",
        "validation": [{"required": true}],
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
        "label":"email",
        "type": "text",
        "validation": [{"pattern": "[0-3]{1,3}", "required": true}]
      },
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

  getValidation(validations: any[] = []): Validators {
    let validators=[];
    validations.forEach((validation) => {
      for(let key in validation) {
        if(validation["required"]) validators.push(Validators.required);
        if(key === "minLength") validators.push(Validators.minLength(validation[key]));
        if(key === "maxLength") validators.push(Validators.maxLength(validation[key]));
        if(key === "pattern") validators.push(Validators.pattern(validation[key]));
      }
    });
    return Validators.compose(validators);
  }
}
