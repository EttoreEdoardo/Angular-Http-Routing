import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharmanderComponent } from './charmander/charmander.component';
import { DiglettComponent } from './diglett/diglett.component';
import { EnergiaComponent } from './energia/energia.component';
import { SnorlaxComponent } from './snorlax/snorlax.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'generic/:id', component:  GenericComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
