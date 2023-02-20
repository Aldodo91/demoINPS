import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaDocumentiComponent } from './component/ricerca-documenti/ricerca-documenti.component';

const routes: Routes = [{component: RicercaDocumentiComponent, path:"ricercaDocumenti" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
