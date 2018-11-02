import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textBox',
  template: `
  <div class="field" [formGroup]="formG">
    <label class="label"> {{template.label | titlecase }} </label>
    <div class="control">
      <input class="input" formControlName="{{template.label}}" [type]="template.type"/>
    </div>
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
