import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import moment from 'moment';


@Injectable({
providedIn: 'root'
})
export class ApiService {
local_storage_prefixe = "prefix.";
taf_base_url = "http://localhost/examen_angular.php/";


network: any = {
token: undefined,
status: true,
message: "Aucun probléme détecté",
}
token: any = {
token_key: null,
token_decoded: null,
user_connected: null,
is_expired: null,
date_expiration: null
}

constructor(private http: HttpClient, private route: Router) { }
// sauvegardes
async get_from_local_storage(key: string): Promise<any> {
let res: any = await localStorage.getItem(this.local_storage_prefixe + key);
return JSON.parse(res)
}
async save_on_local_storage(key: string, value: any): Promise<any> {
await localStorage.setItem(this.local_storage_prefixe + key, JSON.stringify(value));
}
async delete_from_local_storage(key: string) {
await localStorage.setItem(this.local_storage_prefixe + key, 'null');
}

async get_token() {
//le token n'est pas encore chargé
if (this.network.token == undefined) {
this.network.token = await this.get_from_local_storage("token")
if (this.network.token != undefined && this.network.token != null) {// token existant
this.update_data_from_token()// mise a jour du token
}
} else {// token dèja chargé
this.update_data_from_token()// mise a jour du token
}
return this.network.token
}
//les requetes http
async taf_get(path: string, on_success: Function, on_error: Function) {
let api_url = this.taf_base_url + path;
const httpOptions = {
headers: new HttpHeaders({
Authorization: "Bearer " + await this.get_token(),
})
};

this.http.get(api_url, httpOptions).subscribe(
(reponse: any) => {// on success
on_success(reponse)
},
(error: any) => {// on error
this.on_taf_get_error(error, on_error)
}
)
}
on_taf_get_error(error: any, on_error: Function) {
this.network.status = false;
this.network.message = error
alert("Merci de vérifier votre connexion")
on_error(error)
}
async taf_post(path: string, data_to_send: any, on_success: Function, on_error: Function) {
let api_url = this.taf_base_url + path;
const httpOptions = {
headers: new HttpHeaders({
Authorization: "Bearer " + await this.get_token(),
})
};
this.http.post(api_url, data_to_send, httpOptions).subscribe(
(reponse: any) => {// on success
on_success(reponse)
},
(error: any) => {// on error
this.on_taf_post_error(error, on_error)
}
)
}
on_taf_post_error(error: any, on_error: any) {
this.network.status = false;
this.network.message = error
alert("Merci de vérifier votre connexion")
on_error(error)
}
async update_data_from_token() {
let token_key = await this.get_from_local_storage("token")
const helper = new JwtHelperService();
const decodedToken = helper.decodeToken(token_key);
const expirationDate = helper.getTokenExpirationDate(token_key);
const isExpired = helper.isTokenExpired(token_key);

this.token = {
token_key: token_key,
token_decoded: decodedToken,
user_connected: decodedToken.taf_data,
is_expired: isExpired,
date_expiration: expirationDate
}
if (this.token.is_expired) {
this.on_token_expire()
}
}
on_token_expire() {
alert("Votre session s'est expiré! Veuillez vous connecter à nouveau")
this.delete_from_local_storage("token")
this.route.navigate(['/public/login'])
}
format_date(date_string: string) {
return {
full: moment(date_string).locale("fr").format("dddd Do MMMM YYYY"),// 27 février 2023
jma: moment(date_string).locale("fr").format("Do MMMM YYYY"),// jeudi ...
jma2: moment(date_string).locale("fr").format("DD-MM-YYYY"),// 01-11-2023
jma3: moment(date_string).locale("fr").format("YYYY-MM-DD"),// 2023-10-21
full_datetime: moment(date_string).locale("fr").format("dddd Do MMMM YYYY à HH:mm"),// 27 février 2023
}
}
format_current_date() {
return {
full: moment().locale("fr").format("dddd Do MMMM YYYY"),// 27 février 2023
jma: moment().locale("fr").format("Do MMMM YYYY"),// jeudi ...
jma2: moment().locale("fr").format("DD-MM-YYYY"),// 01-11-2023
full_datetime: moment().locale("fr").format("dddd Do MMMM YYYY à HH:mm"),// 27 février 2023
}
}
// custom_menu() {
// let id_privilege = parseInt(this.token.token_decoded.taf_data.id_privilege) //2
// console.log("id_privilege= ", id_privilege)


// this.menu = this.full_menu.filter((un_menu: any) => {
// un_menu.items = un_menu.items.filter((un_item: any) => { return un_item.privileges.indexOf(id_privilege) != -1 })

// return un_menu.items.length > 0
// })
// }
// has_acces(route: string) {

// }
}
