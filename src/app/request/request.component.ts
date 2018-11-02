import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  template: `
    <H2>Select Request</H2>
    <button (click)="navigateTo('journalist')">journalist</button>
    <button (click)="navigateTo('athlete')">athlete</button>
    <router-outlet></router-outlet>
  `
})
export class RequestComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }
 
  navigateTo(formName: string) {
    this.router.navigate([formName], {relativeTo: this.route});
  }

}
