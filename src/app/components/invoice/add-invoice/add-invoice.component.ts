import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Invoice } from 'src/app/shared/models/invoice.model';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  private invoiceForm = this.fb.group({
    name: [''],
    count: [''],
    unit: ['']
  });

  private invoicesList: Invoice[] = [];

  newInvoiceForm = this.fb.group({
    invoices: this.fb.array([
      this.fb.group({
        name: [''],
        count: [''],
        unit: ['']
      })
    ])
  });

  constructor(private invoiceService: InvoiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get invoices() {
    return this.newInvoiceForm.get('invoices') as FormArray;
  }

  addInvoice(): void {
    this.invoicesList.push(this.invoices.value[this.invoices.value.length - 1]);
    this.invoices.push(this.invoiceForm);
  }

  submit(): void {
    this.invoiceService.addInvoices(this.invoicesList);
  }
}
