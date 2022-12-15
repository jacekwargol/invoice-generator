import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/shared/models/invoice.model';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {
  private invoicesList: Invoice[] = [];

  newInvoiceForm = this.fb.group({
    invoices: this.fb.array([])
  });

  constructor(private invoiceService: InvoiceService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.addInvoiceFormGroup();
  }

  get invoices() {
    return this.newInvoiceForm.get('invoices') as FormArray;
  }

  addInvoice(): void {
    this.invoicesList.push(this.invoices.value[this.invoices.value.length - 1]);
    this.addInvoiceFormGroup();
  }

  deleteInvoice(index: number): void {
    this.invoices.removeAt(index);
    this.invoicesList.splice(index, 1);
  }

  submit(): void {
    this.invoicesList.push(this.invoices.value[this.invoices.value.length - 1]);
    this.invoiceService.addInvoices(this.invoicesList);
    this.router.navigate(['/invoices']);
  }

  getNameError(index: number): string {
    const name = this.invoices.controls[index].get('name');
    if (name?.hasError('required')) {
      return 'Please enter a name';
    }
    if (name?.hasError('minlength')) {
      return '3 characters minimum';
    }
    if (name?.hasError('maxlength')) {
      return '30 characters maximum';
    }

    return '';
  }

  getCountError(index: number): string {
    const count = this.invoices.controls[index].get('count');
    if (count?.hasError('required')) {
      return 'Please enter count';
    }
    if (count?.hasError('min')) {
      return 'Minimum value 1';
    }
    if (count?.hasError('max')) {
      return 'Maximum value 100';
    }
    if (count?.hasError('pattern')) {
      return 'Please enter whole number';
    }

    return '';
  }

  getPriceError(index: number): string {
    const price = this.invoices.controls[index].get('price');
    if (price?.hasError('required')) {
      return 'Please enter a price';
    }
    if (price?.hasError('min')) {
      return 'Minimum value 1';
    }
    if (price?.hasError('max')) {
      return 'Maximum value 1 000 000';
    }
    if (price?.hasError('pattern')) {
      return 'Please enter whole number';
    }

    return '';
  }



  private addInvoiceFormGroup(): void {
    this.invoices.push(this.fb.group({
      name: ['',
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]],
      count: ['',
        [Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern('^[0-9]+$')]],
      price: ['',
        [Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern('^[0-9]+$')]]
    }));
  }
}