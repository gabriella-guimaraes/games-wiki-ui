import { Component } from '@angular/core';
import { FormControlComponent } from '../form-control/form-control.component';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [FormControlComponent],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {

}
