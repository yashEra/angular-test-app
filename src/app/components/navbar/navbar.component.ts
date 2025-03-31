import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIcon: string = 'menu';
  
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('top-[9%]');
      this.menuIcon = this.menuIcon === 'menu' ? 'close' : 'menu';
    }
  }
}
