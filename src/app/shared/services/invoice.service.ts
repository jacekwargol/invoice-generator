import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  invoicesUrl = 'http://localhost:3000/api/invoices'

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl);
  }

  addInvoice(newInvoice: Invoice): void {
    this.http.post(this.invoicesUrl, newInvoice).subscribe(i => console.log);
  }

  addInvoices(invoices: Invoice[]): void {
    invoices.forEach(invoice => this.addInvoice(invoice));
  }
}
