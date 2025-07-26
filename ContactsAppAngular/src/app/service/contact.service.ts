import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:8080/api"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<any> {
    return this.http.get(BASE_URL + "/contacts");
  }

  getContactById(id: number): Observable<any> {
    return this.http.get(BASE_URL + "/contact/" + id);
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(BASE_URL + "/add-contact", contact);
  }

  updateContact(id: number, contact: any): Observable<any> {
    return this.http.put(BASE_URL + "/contact/" + id, contact, {responseType: 'text'});
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(BASE_URL + "/contact/" + id);
  }

}
