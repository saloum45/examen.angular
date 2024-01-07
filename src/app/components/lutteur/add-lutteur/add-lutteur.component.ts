import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetMessageService } from '../../../service/sweet-message.service';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-lutteur',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-lutteur.component.html',
  styleUrl: './add-lutteur.component.css',
  providers: [
    SweetMessageService,
    ApiService
  ]
})
export class AddLutteurComponent implements OnInit {

  // Attributs
  public nom = "";
  public taille = "";
  public poids = "";
  public photo = "";
  public description = "";
  public age = "";
  public id_ecurie = "";
  public ecuries: any = [];


  // Methodes
  constructor(private api: ApiService, private message: SweetMessageService, private router: Router) {

  }
  ngOnInit(): void {
    this.api.taf_get("ecurie/get", (reponse: any) => {
      if (reponse.status) {
        this.ecuries = reponse.data;
      }
    }, (error: any) => {
      console.log(error);
    })
  }
  Ajouter() {
    if (this.nom == "" || this.age == "" || this.photo == "" || this.poids == "" || this.taille == "" || this.description == "") {
      this.message.simpleMessage("error", "oop's", "Veuillez renseigner tous les champs");
    } else {
      this.api.taf_post("lutteur/add", { nom: this.nom, age: this.age, photo: this.photo, poids: this.poids, taille: this.taille, description: this.description,id_ecurie:this.id_ecurie }, (reponse: any) => {
        if (reponse.status) {

          this.message.simpleMessage("success", "Merci", "Ajout fait avec succès");
          this.router.navigate(['/listLutteurs']);
        }
      }, (error: any) => {
        console.log(error);
      })
    }
  }
}
