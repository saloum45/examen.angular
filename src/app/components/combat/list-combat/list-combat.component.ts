import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-combat',
  standalone: true,
  imports: [],
  templateUrl: './list-combat.component.html',
  styleUrl: './list-combat.component.css',
  providers: [
    ApiService,
    HttpClient
  ]
})
export class ListCombatComponent implements OnInit {
  // Attributs
  public combats: any[] = [];


  // Methodes
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.taf_get("combat/get_form_details", (reponse: any) => {
      // this.commbats = reponse.data.les_ecuries_lutteurs;
      console.warn("combats", reponse);
      this.combats=reponse.data.combat;
      console.warn("combats tb",this.combats );
    }, (error: any) => {
      console.log(error);
    });
  }
}
