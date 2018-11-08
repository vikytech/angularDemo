import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'date-picker',
  template: `
  <div class="field" [formGroup]="formG">
    <label class="label">{{template.label | titlecase }}</label>
    <div class="control">    
      <p-calendar
      [showIcon]="true"
      formControlName="{{template.label}}"
      [minDate]="minDateValue" 
      [maxDate]="maxDateValue"
      id="{{template.label}}"></p-calendar>
    </div>
</div>`
})
export class DatePickerComponent implements OnInit {

  @Input() public template = {};
  @Input() public formG: FormGroup;
  date: Date;
  
  constructor() { }

  ngOnInit() {
    
  }

}
