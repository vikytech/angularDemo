import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { FormDetailsProviderService } from './registration-form/form-details-provider.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, appRoutingComponents, SideBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [ FormDetailsProviderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
