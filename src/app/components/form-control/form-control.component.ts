import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormControlDirective, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { urlValidator } from '../../utils/urlValidator';

// Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatButton, MatDividerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {

  reviewForm!: FormGroup

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      platform: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      favorites: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
      image: new FormControl('', [Validators.required, urlValidator()])
    })
  }

  // getters
  get title() {
    return this.reviewForm.get('title')!;
  }

  get platform() {
    return this.reviewForm.get('platform')!;
  }

  get description() {
    return this.reviewForm.get('description')!;
  }

  get favorites() {
    return this.reviewForm.get('favorites')!;
  }

  get rating() {
    return this.reviewForm.get('rating')!;
  }

  get image() {
    return this.reviewForm.get('image')!;
  }
  
  matcher = new MyErrorStateMatcher();
  submit() {
    console.log("Enviou o formulário!")
  }
}
