import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { DropdownComponent } from './drop-down/dropdown.component';
import { RequestComponent } from './request/request.component';
import { JournalistFormComponent } from './journalist-form/journalist-form.component';
import { AthleteFormComponent } from './athlete-form/athlete-form.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { RequestTableComponent } from './request-table/request-table.component';

const routes: Routes = [
  { path: '' , redirectTo: 'requests', pathMatch: 'full' },
  { path: 'requests', component: RequestTableComponent},
  { path: 'requests/new', component: RequestComponent,
  children: [
    {
      path: 'journalist',
      component: JournalistFormComponent
    },
    {
      path: 'athlete',
      component: AthleteFormComponent
    }]
  },
  { path: 'requests/:id', component: EditRequestComponent,
      children : [{
          path: 'edit',
          component: EditRequestComponent,
        }]
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
  PageNotFoundComponent,
  RegistrationFormComponent,
  FormGeneratorComponent,
  TextBoxComponent,
  DropdownComponent,
  AthleteFormComponent,
  JournalistFormComponent,
  RequestComponent,
  EditRequestComponent,
  RequestTableComponent
]
