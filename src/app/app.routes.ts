import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListLutteurComponent } from './components/lutteur/list-lutteur/list-lutteur.component';
import { ListCombatComponent } from './components/combat/list-combat/list-combat.component';
import { ListActualiteComponent } from './components/actualite/list-actualite/list-actualite.component';
import { ListStatsComponent } from './components/stats/list-stats/list-stats.component';
import { ListClassementComponent } from './components/classement/list-classement/list-classement.component';
import { AddActualiteComponent } from './components/actualite/add-actualite/add-actualite.component';
import { AddLutteurComponent } from './components/lutteur/add-lutteur/add-lutteur.component';
import { AddCombatComponent } from './components/combat/add-combat/add-combat.component';

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
  },
  {
    path:"addLutteur",
    component:AddLutteurComponent
  },
  {
    path:"listCombats",
    component:ListCombatComponent
  },
  {
    path:"addCombat",
    component:AddCombatComponent
  },
  {
    path:"listActus",
    component:ListActualiteComponent
  },
  {                                         
    path:"addActus",
    component:AddActualiteComponent
  },
  {
    path:"listStats",
    component:ListStatsComponent
  },
  {
    path:"listClassements",
    component:ListClassementComponent
  }
];
