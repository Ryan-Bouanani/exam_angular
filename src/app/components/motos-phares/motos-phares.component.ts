import { Component, OnInit } from '@angular/core';
import { Motos } from 'src/app/models/motos';
import { MotosService } from 'src/app/services/motos.service';

@Component({
  selector: 'app-motos-phares',
  templateUrl: './motos-phares.component.html',
  styleUrls: ['./motos-phares.component.css']
})
export class MotosPharesComponent implements OnInit {
  motos: Motos[] = [];

  constructor(private motosService : MotosService) { }

  ngOnInit(): void {
      this.motosService.motos().subscribe(data => {
       this.motos = data; 
       console.log(this.motos);
       
      })
    }
}
