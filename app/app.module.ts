import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDesaparecidosComponent } from './lista-desaparecidos/lista-desaparecidos.component';
import { DetalhesDesaparecidoComponent } from './detalhes-desaparecido/detalhes-desaparecido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDesaparecidosComponent,
    DetalhesDesaparecidoComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
