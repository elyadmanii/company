import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  companies: Company[] = [];

  constructor(private comapyService: CompanyService) { }

  ngOnInit() {
    this.comapyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }

}
