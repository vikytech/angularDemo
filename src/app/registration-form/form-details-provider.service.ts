import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from '../request';
import { Validators } from '@angular/forms';
import { getCustomValidator } from '../validators/helper';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsProviderService {

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
        "validation": [{"required": true, "custom": "emailValidation"}]
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

  getUserDetail(userId = 1): Observable<Request> {
     let URL = "http://localhost:3000/users/"+userId;
      return this._httpClient.get(URL).pipe(
        map(data => new Request(data)));
  }

  getFormGroup(template){
    const group = {};
    for(let element of template) {
      group[element.label] = new FormControl({ value: '', disabled: false}, this.getValidation(element.validation));
    }
    return new FormGroup(group);
  }

  getFormGroupWithData(template, data){
    const group = {};
    for(let element of template) {
      group[element.label] = new FormControl({ value: data[element.label], disabled: false}, this.getValidation(element.validation));
    }
    return new FormGroup(group);
  }

  getValidation(validations: any[] = []): Validators {
    let validators=[];
    validations.forEach((validation) => {
      for(let key in validation) {
        if(validation["required"]) validators.push(Validators.required);
        if(key === "minLength") validators.push(Validators.minLength(validation[key]));
        if(key === "maxLength") validators.push(Validators.maxLength(validation[key]));
        if(key === "pattern") validators.push(Validators.pattern(validation[key]));
        if(key === "custom") validators.push(getCustomValidator(validation[key]));
      }
    });
    return Validators.compose(validators);
  }
}