import { Component, EventEmitter, Output } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {

  addContactForm: FormGroup | any;

  constructor(private contactService: ContactService, private fb: FormBuilder) {}

  @Output() close = new EventEmitter<void>();

  closeModal(): void {
	  this.close.emit();
  }

  ngOnInit () {
    this.addContactForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  addContact() {
    console.log(this.addContactForm.value);
    this.contactService.addContact(this.addContactForm.value).subscribe((res) => {
      console.log(res);
      window.location.reload();
    })}

}
