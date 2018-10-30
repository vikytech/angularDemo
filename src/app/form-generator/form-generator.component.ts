import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-generator',
  templateUrl: "form-generator.component.html"
})
export class FormGeneratorComponent implements OnInit {

  @Input() public template = [];
  @Input() public data= {};

  constructor() { }

  ngOnInit() {}

}
