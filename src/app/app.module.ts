import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { InvoicesListComponent } from './components/invoice/invoices-list/invoices-list/invoices-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInvoiceComponent,
    InvoicesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
