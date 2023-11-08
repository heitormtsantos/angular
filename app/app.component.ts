import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desaparecidos: any[] = [];

  onDesaparecidosDataReceived(event: any) {
    this.desaparecidos = event;
  }
}
