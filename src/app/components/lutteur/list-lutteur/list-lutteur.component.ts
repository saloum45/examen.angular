import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-lutteur',
  standalone: true,
  imports: [],
  templateUrl: './list-lutteur.component.html',
  styleUrl: './list-lutteur.component.css',
  providers:[
    ApiService,
    HttpClient
  ]
})
export class ListLutteurComponent implements OnInit{
  // Attributs
  // public lutteurs:any[]=[];
  // public ecuries:any[]=[];
  public lutteursEcuries:any[]=[];


  // Methodes
  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.api.taf_get("lutteur/get_form_details",(reponse:any)=>{
      this.lutteursEcuries=reponse.data.les_ecuries_lutteurs;
          console.warn("repon",reponse);
        },(error:any)=>{
          console.log(error);
        });
  }
}
