import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddInvoiceComponent } from "./components/invoice/add-invoice/add-invoice.component";

const routes: Routes = [
    { path: '', component: AddInvoiceComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }