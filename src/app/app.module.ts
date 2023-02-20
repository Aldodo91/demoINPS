import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RicercaDocumentiComponent } from './component/ricerca-documenti/ricerca-documenti.component';
import { HttpClientModule } from '@angular/common/http';
import { RicercaDocumentiService } from './services/ricerca-documenti.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MyFormComponent } from './component/my-form/my-form.component';

@NgModule({
  declarations: [AppComponent, RicercaDocumentiComponent, MyFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [RicercaDocumentiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
