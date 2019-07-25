import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from "../../services/incidencia.service";
import { Incidencia } from 'src/app/interfaces/incidencia';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-incidencia-list',
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.css']
})
export class IncidenciaListComponent implements OnInit {

  incidencias: Incidencia[] = [];

  constructor(private incidenciaService: IncidenciaService,
    private router: Router,
    private activateroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getIncidencias();
  }

  getIncidencias(){
    this.incidenciaService.getIncidencias()
    .subscribe(
      res => {
        this.incidencias = res;
      },
      err => console.log(err)
    )
  }

  deleteIncidencia(id: string){
    this.incidenciaService.deleteIncidencia(id)
    .subscribe(
      ress => {
        this.getIncidencias();
      },
      err => console.log(err)
      
    )
  }

}
