import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddInvoiceComponent } from "./components/invoice/add-invoice/add-invoice.component";
import { InvoicesListComponent } from "./components/invoice/invoices-list/invoices-list/invoices-list.component";

const routes: Routes = [
    { path: '', component: AddInvoiceComponent },
    { path: 'invoices', component: InvoicesListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }