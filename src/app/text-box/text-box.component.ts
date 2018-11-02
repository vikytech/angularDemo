import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textBox',
  templateUrl: '../text-box/text-box.component.html'
})
export class TextBoxComponent implements OnInit {

  @Input() public template = {};
  @Input() public data= {};
  @Input() public formG: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
