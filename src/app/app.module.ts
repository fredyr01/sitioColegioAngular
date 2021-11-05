import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PqrsComponent } from './pqrs/pqrs.component';
import { ReseniaComponent } from './resenia/resenia.component';
import { TrabajeConNosotrosComponent } from './trabaje-con-nosotros/trabaje-con-nosotros.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PqrsComponent,
    ReseniaComponent,
    TrabajeConNosotrosComponent,
    InscripcionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
