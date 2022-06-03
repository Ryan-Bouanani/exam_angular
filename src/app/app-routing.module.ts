import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMotoComponent } from './components/details-moto/details-moto.component';
import { MarquesComponent } from './components/marques/marques.component';
import { MotosFiltrageMarquesComponent } from './components/motos-filtrage-marques/motos-filtrage-marques.component';
import { MotosFiltrageTypeComponent } from './components/motos-filtrage-type/motos-filtrage-type.component';
import { MotosPharesComponent } from './components/motos-phares/motos-phares.component';
import { MotosTypeComponent } from './components/motos-type/motos-type.component';

const routes: Routes = [
  {path : '', component : MotosPharesComponent},
  {path : 'type', component : MotosTypeComponent},
  {path : 'marque', component : MarquesComponent},
  {path : 'type/:type', component : MotosFiltrageTypeComponent},
  {path : 'marque/:marque', component : MotosFiltrageMarquesComponent},
  {path : ':id', component : DetailsMotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
