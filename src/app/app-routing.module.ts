import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorComponent} from './door/door.component'
import { MainDoorComponent} from './main-door/main-door.component'

const routes: Routes = [
  { path: '' , component: DoorComponent },
  { path: 'door' , component: DoorComponent },
  { path: 'main-door', component: MainDoorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const appRoutingComponents = [ DoorComponent, MainDoorComponent]
