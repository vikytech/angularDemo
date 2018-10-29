import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsProviderService {

  constructor() { }

  getFormDetails(){
   return [
       {
        "label": "name",
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
      },
      {
        "label":"description",
        "type": "text"
      },
    ]
  }

  getUserDetail() {
    return new User("Viky", 23, "Male", "Very nice");
  }
}
