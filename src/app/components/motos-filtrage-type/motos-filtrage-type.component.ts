import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Motos } from 'src/app/models/motos';
import { MotosService } from 'src/app/services/motos.service';

@Component({
  selector: 'app-motos-filtrage-type',
  templateUrl: './motos-filtrage-type.component.html',
  styleUrls: ['./motos-filtrage-type.component.css']
})
export class MotosFiltrageTypeComponent implements OnInit {
  motos !: Motos[];
  type !: string;
  constructor(private activatedRoute : ActivatedRoute, private motosService : MotosService) { }
  
  ngOnInit(): void {
    this.type = <string>this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
    
    this.motosService.type(this.type).subscribe(data => {
      this.motos = data;
      console.log(this.motos);
    })
  }

}
