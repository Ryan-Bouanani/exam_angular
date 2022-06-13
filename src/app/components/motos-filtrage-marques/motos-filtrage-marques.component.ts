import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Motos } from 'src/app/models/motos';
import { MotosService } from 'src/app/services/motos.service';

@Component({
  selector: 'app-motos-filtrage-marques',
  templateUrl: './motos-filtrage-marques.component.html',
  styleUrls: ['./motos-filtrage-marques.component.css']
})
export class MotosFiltrageMarquesComponent implements OnInit {
  motos !: Motos[];
  marque !: string;

  constructor(private activatedRoute : ActivatedRoute, private motosService : MotosService) { }

  ngOnInit(): void {
    this.marque = <string>this.activatedRoute.snapshot.paramMap.get('marque');
    console.log(this.marque);
    
    this.motosService.marque(this.marque).subscribe(data => {
      this.motos = data;
      console.log(this.motos);
    })
  }

}
