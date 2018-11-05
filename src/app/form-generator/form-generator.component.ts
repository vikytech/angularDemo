import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-generator',
  templateUrl: "form-generator.component.html"
})
export class FormGeneratorComponent implements OnInit {

  @Input() public template = [];
  @Input() public formG: FormGroup;

  constructor() { }

  ngOnInit() {}

}
