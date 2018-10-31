import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'textBox',
  template: `
  <label> {{template.label | titlecase }} </label>
  <input name="{{template.label}}" type="{{template.type}}"  [ngModel]="data[template.label]"/>
  `,
  styles: []
})
export class TextBoxComponent implements OnInit {

  @Input() public template = {};
  @Input() public data= {};
  constructor() { }

  ngOnInit() {
  }

}
