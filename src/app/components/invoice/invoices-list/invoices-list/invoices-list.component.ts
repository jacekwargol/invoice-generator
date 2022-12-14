import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/shared/models/invoice.model';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[] = [];
  columnsToDisplay = ['id', 'name', 'count', 'price'];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(i => {
      this.invoices = i;
    });
  }

  totalPrice(): number {
    return this.invoices
      .map(i => i.count * i.price)
      .reduce<number>((sum, current) => sum + current, 0);
  }
}
