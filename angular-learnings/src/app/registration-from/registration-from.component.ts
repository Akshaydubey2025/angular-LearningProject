import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-from',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './registration-from.component.html',
  styleUrl: './registration-from.component.scss',
})
export class RegistrationFromComponent {
  constructor(private router: Router) {}
  registrationForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }

  saveToLocalStorage() {
    if (this.registrationForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.registrationForm.value));
      alert('Username saved to local storage!');
      this.router.navigate(['table']);

    }
  }
}
