import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './component/my-form/my-form.component';
import { RicercaDocumentiComponent } from './component/ricerca-documenti/ricerca-documenti.component';

const routes: Routes = [
  { component: RicercaDocumentiComponent, path: 'ricercaDocumenti' },
  { component: MyFormComponent, path: 'myForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
