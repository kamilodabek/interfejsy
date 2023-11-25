import {Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('firstNameInput') firstNameInput: ElementRef | undefined;
  @ViewChild('lastNameInput') lastNameInput: ElementRef | undefined;
  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('genderSelect') genderSelect: ElementRef | undefined;

  showSuccessAlert = false;
  showErrorAlert = false;

  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
      const personData = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        gender: this.form.value.gender
      };

      this.http.post('http://localhost:8091/person/add', personData, { responseType: 'text' })
        .subscribe(
          response => {
            console.log('Person added successfully!', response);
            this.showSuccessAlert = true;
            setTimeout(() => this.showSuccessAlert = false, 3000);
          },
          error => {
            console.error('Error adding person:', error);
            this.showErrorAlert = true;
            setTimeout(() => this.showErrorAlert = false, 3000);
          }
        );
    } else {
      // alert('Invalid form. Please check the fields.');
      this.showErrorAlert = true;
      setTimeout(() => this.showErrorAlert = false, 3000);
    }
  }

}
