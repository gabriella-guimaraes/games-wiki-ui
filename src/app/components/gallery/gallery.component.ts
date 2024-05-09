import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, MatIconAnchor, MatIconModule, MatButton, MatDividerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
