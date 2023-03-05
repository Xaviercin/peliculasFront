import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponentComponent } from './detalle-component/detalle-component.component'

const routes: Routes = [
  {path: 'detalle/:movieId', component: DetalleComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
