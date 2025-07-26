import { Component } from '@angular/core';
import { ContactsTableComponent } from "../../components/contacts-table/contacts-table.component";
import { AddContactComponent } from "../../components/add-contact/add-contact.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, ContactsTableComponent, AddContactComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isModalVisible = false;

  showModal() {
	  this.isModalVisible = true;
  }

  hideModal() {
	  this.isModalVisible = false;
  }
}
