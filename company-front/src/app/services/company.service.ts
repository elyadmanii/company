import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WsUrl } from '../utils/ws-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  save(company: Company) {
    return this.http.post<Company>(WsUrl.COMPANY + '/company', company, httpOptions);
  }

  update(company: Company) {
    return this.http.put<Company>(WsUrl.COMPANY + '/company', company, httpOptions);
  }

  delete(id: any) {
    return this.http.delete<Company>(WsUrl.COMPANY + '/company/' + id);
  }

  getCompanies() {
    return this.http.get<Company[]>(WsUrl.COMPANY + '/company');
  }

  getCompany(id: any) {
    return this.http.get<Company>(WsUrl.COMPANY + '/company/' + id);
  }

}
