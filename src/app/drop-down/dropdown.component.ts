import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() public template = {};
  @Input() public formG: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
