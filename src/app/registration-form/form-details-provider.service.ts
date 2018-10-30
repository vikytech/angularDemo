import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsProviderService {

  URL= 'http://localhost:3000/users/1';
  private user: User;

  constructor(public _httpClient : HttpClient) {
  }

  public template =   { "journalist": [
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
   },
   {
     "label":"description",
     "type": "text"
   },
   {
     "label":"magazine",
     "type":"text"
   }
 ],
  "athelette": [
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
   },
   {
     "label":"description",
     "type": "text"
   },
   {
     "label":"height",
     "type":"number"
   }
 ]
}

  getFormDetails(functionType: string){
    return this.template[functionType]
  }

  getUserDetail(): Observable<any>{      
    return this._httpClient.get(this.URL);
  }
}
