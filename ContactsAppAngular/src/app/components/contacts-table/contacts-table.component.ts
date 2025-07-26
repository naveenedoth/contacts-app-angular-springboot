import { Component } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-table',
  imports: [NgFor, RouterLink],
  templateUrl: './contacts-table.component.html',
  styleUrl: './contacts-table.component.css'
})
export class ContactsTableComponent {

  contacts: [] | any;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe((res) => {
      this.contacts = res;
    })
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe((res) => {
      console.log(res);
    })
  }

}
