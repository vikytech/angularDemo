import { AbstractControl } from "@angular/forms";

export function emailValidator(control: AbstractControl): {[key : string] : any} | null {
    let forbiddenEmails = ["google@google.com", "yahoo@yahoo.com", "flipkart@flipkart.com", "amazon@amazon.com"];
    if(forbiddenEmails.indexOf(control.value) > -1){
      return { 'forbiddenEmail' : { value : control.value}};
    }
    return null;
  }