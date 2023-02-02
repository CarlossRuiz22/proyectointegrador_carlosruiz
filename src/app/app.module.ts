import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { PorfolioService } from './servicios/porfolio.service';
import{HttpClientModule}  from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';



 @NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    NavBarComponent,
    PruebaComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
  
export class AppModule {}
