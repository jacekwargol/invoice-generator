import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company.model';
import { CompanyService } from 'src/app/shared/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company!: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe((c: Company) => this.company = c);
  }

  phoneNumbers(): string {
    return this.company.phones.join(', ');
  }
}
