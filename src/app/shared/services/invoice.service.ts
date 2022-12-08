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

  addInvoice(newInvoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.invoicesUrl, newInvoice);
  }

  addInvoices(invoices: Invoice[]): void {
    this.http.post(this.invoicesUrl, invoices);
  }
}
