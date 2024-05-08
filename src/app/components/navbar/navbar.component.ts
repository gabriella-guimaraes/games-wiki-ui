import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AboutComponent, GalleryComponent, AddReviewComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  btnMenu: boolean = false;

  btnMobile() {
    this.btnMenu =!this.btnMenu;
  }

  constructor(private router: Router) {}

  ngOnInit(){
    this.router.navigate(["/"]);
  }

}
