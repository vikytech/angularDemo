import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsProviderService {

  constructor() { }

  getFormDetails(){
   return [
       {
        "formLabel": "name",
        "dataType"  : "String", 
        "formType"  : "text"
      },
      {
        "formLabel":"age",
        "dataType": "Number", 
        "formType": "text"
      },
      {
        "formLabel":"gender",
        "dataType": "String", 
        "formType": "dropdown",
        "options" : [
          "male","female" 
        ]
      },
      {
        "formLabel":"description",
        "dataType": "String", 
        "formType": "text"
      },
    ]
  }
}
