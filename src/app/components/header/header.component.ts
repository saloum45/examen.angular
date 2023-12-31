import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  // Attributs
  // les liens du header
  public linkItems=[
    {
      path:"listCombats",
      name:"COMBATS"
    },
    {
      path:"listActus",
      name:"ACTU"
    },
    {
      path:"listClassements",
      name:"CLASSEMENT"
    },
    {
      path:"listStats",
      name:"STATS"
    },
    {
      path:"listLutteurs",
      name:"LUTTEURS"
    }
  ];



  // Methodes
  ngOnInit(): void {
    this.activeLink();
  }

  activeLink() {
    let links = document.querySelectorAll('a');
    links.forEach((element: any) => {
      element.addEventListener('click', () => {
        links.forEach((element: any) => {
          element.classList.remove('active-link');
        });
        // alert('okay')
        element.classList.add('active-link');
      });
    });
  }

}
