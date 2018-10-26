import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  declarations: [
    AppComponent, appRoutingComponents, SideBarComponent, PageNotFoundComponent, RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
