import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInvoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
