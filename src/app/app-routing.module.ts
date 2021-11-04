import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { PqrsComponent } from './pqrs/pqrs.component';
import { ReseniaComponent } from './resenia/resenia.component';
import { TrabajeConNosotrosComponent } from './trabaje-con-nosotros/trabaje-con-nosotros.component';

const routes: Routes = [
  {path: '', redirectTo:'inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'resenia', component: ReseniaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'pqrs', component: PqrsComponent},
  {path: 'trabaje-con-nosotros', component: TrabajeConNosotrosComponent},
  {path: 'inscripcion', component: InscripcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }