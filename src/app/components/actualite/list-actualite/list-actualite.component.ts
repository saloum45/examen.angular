import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-actualite',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './list-actualite.component.html',
  styleUrl: './list-actualite.component.css',
  providers:[
    ApiService,
    HttpClient
  ]
})
export class ListActualiteComponent implements OnInit {
  // Attributs
  public actualites: any[] = [];


  // Methodes
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.taf_get("actualite/get", (reponse: any) => {
      // this.commbats = reponse.data.les_ecuries_lutteurs;
      console.warn("actualite", reponse);
      this.actualites = reponse.data;
      console.warn("actualite tb", this.actualites);
    }, (error: any) => {
      console.log(error);
    });
  }
}
