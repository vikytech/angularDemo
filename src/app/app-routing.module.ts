import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorComponent} from './door/door.component'
import { MainDoorComponent} from './main-door/main-door.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { DropdownComponent } from './drop-down/dropdown.component';
import { RequestComponent } from './request/request.component';
import { JournalistFormComponent } from './journalist-form/journalist-form.component';
import { AthleteFormComponent } from './athlete-form/athlete-form.component';


const routes: Routes = [
  { path: '' , redirectTo: 'door', pathMatch: 'full' },
  { path: 'door' , component: DoorComponent },
  { path: 'main-door', component: MainDoorComponent},
  { path: 'request', 
    component: RequestComponent,
    children: [
      {path: 'journalist',
      component: JournalistFormComponent,
      pathMatch: 'full'
    },
      {path: 'athlete',
      component: AthleteFormComponent,
      pathMatch: 'full'
    },
    ]
  },
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
export const appRoutingComponents = [
  DoorComponent,
  MainDoorComponent,
  PageNotFoundComponent,
  RegistrationFormComponent,
  FormGeneratorComponent,
  TextBoxComponent,
  DropdownComponent,
  AthleteFormComponent,
  JournalistFormComponent,
  RequestComponent
]
