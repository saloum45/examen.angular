import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListLutteurComponent } from './components/lutteur/list-lutteur/list-lutteur.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"listLutteurs",
    pathMatch:"full"
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"listLutteurs",
    component:ListLutteurComponent
  }
];
