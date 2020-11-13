import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersecmapComponent}from './persecmap/persecmap.component'
import {PersecListComponent}from './persec-list/persec-list.component'

const routes: Routes = [
  { path: 'map', component: PersecmapComponent },
  {path:'list',component:PersecListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
