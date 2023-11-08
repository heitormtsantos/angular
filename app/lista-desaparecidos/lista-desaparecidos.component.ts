import { Component, OnInit } from '@angular/core';
import { DesaparecidosService } from '../desaparecidos.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-lista-desaparecidos',
  templateUrl: './lista-desaparecidos.component.html',
  styleUrls: ['./lista-desaparecidos.component.css']
})
export class ListaDesaparecidosComponent implements OnInit {
  desaparecidos: any[] = [];

  constructor(private desaparecidosService: DesaparecidosService) {}

  ngOnInit() {
    const params = new HttpParams()
      .set('status', 'DESAPARECIDO')
      .set('porPagina', '12');

    this.desaparecidosService.getPessoasDesaparecidas(params).subscribe((response: { data: any[] }) => {
      this.desaparecidos = response.data;
    });
  }
}
