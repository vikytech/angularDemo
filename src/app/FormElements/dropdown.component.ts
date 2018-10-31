import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  template: `
  <div [formGroup]="formG">
  <label> {{template.label  | titlecase}} </label>
  <select formControlName="{{template.label}}">
      <option *ngFor="let opt of template.options" value="{{opt}}">
        {{opt}}
      </option>
  </select>
  </div>
  `,
  styles: []
})
export class DropdownComponent implements OnInit {

  @Input() public template = {};
  @Input() public data= {};
  @Input() public formG: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
