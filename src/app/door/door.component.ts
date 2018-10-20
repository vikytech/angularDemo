import { Component, Input } from '@angular/core';

@Component({
	selector: 'door',
	templateUrl: 'door.component.html',
	styleUrls: ['door.component.css']
})
export class DoorComponent {
	@Input() public type: string="Default";
}