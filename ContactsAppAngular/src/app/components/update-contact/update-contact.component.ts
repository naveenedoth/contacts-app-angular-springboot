import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './update-contact.component.html',
  styleUrl: './update-contact.component.css'
})
export class UpdateContactComponent {

  updateContactForm: FormGroup | any;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private service: ContactService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.updateContactForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required]
    })
    this.id = this.activatedRoute.snapshot.params["id"];
    this.getContactById();
  }

  getContactById() {
    this.service.getContactById(this.id).subscribe((res) => {
      console.log(res);
      this.updateContactForm.patchValue(res);
    })
  }

  updateContact() {
    const updatedContact = {
      id: this.id,
      ...this.updateContactForm.value
    };
    
    this.service.updateContact(this.id, updatedContact).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    });
  }
}
