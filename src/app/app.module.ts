import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MotosPharesComponent } from './components/motos-phares/motos-phares.component';
import { MotosTypeComponent } from './components/motos-type/motos-type.component';
import { MotosFiltrageTypeComponent } from './components/motos-filtrage-type/motos-filtrage-type.component';
import { MarquesComponent } from './components/marques/marques.component';
import { MotosFiltrageMarquesComponent } from './components/motos-filtrage-marques/motos-filtrage-marques.component';
import { DetailsMotoComponent } from './components/details-moto/details-moto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MotosPharesComponent,
    MotosTypeComponent,
    MotosFiltrageTypeComponent,
    MarquesComponent,
    MotosFiltrageMarquesComponent,
    DetailsMotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
