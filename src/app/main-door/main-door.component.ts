import { Component } from '@angular/core';
import { DoorComponent } from '../door/door.component'

@Component({
	selector:'main-door',
	templateUrl: '../door/door.component.html'
})

export class MainDoorComponent extends DoorComponent {	
	constructor() { super(); this.type = 'Main'};
}
