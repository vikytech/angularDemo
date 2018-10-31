import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  template: `
  <label> {{template.label  | titlecase}} </label>
  <select name="{{template.label}}"  [ngModel]="data[template.label]">
      <option *ngFor="let opt of template.options" value="{{opt}}">
        {{opt}}
      </option>
  </select>
  `,
  styles: []
})
export class DropdownComponent implements OnInit {

  @Input() public template = {};
  @Input() public data= {};
  constructor() { }

  ngOnInit() {
  }

}
