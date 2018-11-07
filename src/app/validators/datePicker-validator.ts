import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateValidator( minDate : string, maxDate : string): ValidatorFn{
    return (control : AbstractControl): {[key : string] : any } | null => {
        if(control.value < minDate || control.value > maxDate){
            return { "InvalidDate" : control.value}
        }
        return null;
    }
}
