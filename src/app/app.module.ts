import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoorComponent } from './door/door.component';
import { MainDoorComponent } from './main-door/main-door.component';

@NgModule({
  declarations: [
    AppComponent, DoorComponent, MainDoorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
