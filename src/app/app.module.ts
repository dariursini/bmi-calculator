import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './patient/form/form.component';
import { TableComponent } from './patient/table/table.component';
import { PatientService } from './patient.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
