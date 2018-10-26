import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorComponent} from './door/door.component'
import { MainDoorComponent} from './main-door/main-door.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '' , redirectTo: 'door', pathMatch: 'full' },
  { path: 'door' , component: DoorComponent },
  { path: 'main-door', component: MainDoorComponent},
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const appRoutingComponents = [ DoorComponent, MainDoorComponent, PageNotFoundComponent, RegistrationFormComponent]
