import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textBox',
  template: `
  <div [formGroup]="formG">
    <label> {{template.label | titlecase }} </label>
    <input formControlName="{{template.label}}" [type]="template.type"/>
  </div>
  `,
  styles: []
})
export class TextBoxComponent implements OnInit {

  @Input() public template = {};
  @Input() public data= {};
  @Input() public formG: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
