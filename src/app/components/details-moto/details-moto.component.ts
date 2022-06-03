import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Motos } from 'src/app/models/motos';
import { MotosService } from 'src/app/services/motos.service';

@Component({
  selector: 'app-details-moto',
  templateUrl: './details-moto.component.html',
  styleUrls: ['./details-moto.component.css']
})
export class DetailsMotoComponent implements OnInit {
  MotoDeId!: Motos;

  constructor(private motosService : MotosService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id : number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));

    this.motosService.detailMoto(id).subscribe(data => {
      this.MotoDeId = data;
    })
  }

}
