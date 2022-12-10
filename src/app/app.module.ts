import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { InvoicesListComponent } from './components/invoice/invoices-list/invoices-list/invoices-list.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { CompanyComponent } from './components/company/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInvoiceComponent,
    InvoicesListComponent,
    MenuComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
