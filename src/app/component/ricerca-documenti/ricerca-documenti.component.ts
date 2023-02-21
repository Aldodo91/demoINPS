import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { converter } from 'src/app/common/dateConverter';
import { ListaAnniService } from 'src/app/services/lista-anni.service';
import { Content } from 'src/app/services/response';
import { RicercaDocumentiService } from 'src/app/services/ricerca-documenti.service';

@Component({
  selector: 'app-ricerca-documenti',
  templateUrl: './ricerca-documenti.component.html',
  styleUrls: ['./ricerca-documenti.component.css'],
  providers: [RicercaDocumentiService],
})
export class RicercaDocumentiComponent implements OnInit {
  dataDTO = {
    tipo: '',
    anno: '',
    progressivo: '',
    data: new Date(),
    dataAl: new Date(),
  };
  interaForm = new FormGroup({
    tipo: new FormControl(this.dataDTO.tipo, [Validators.required]),
    anno: new FormControl(this.dataDTO.anno, [Validators.required]),
    progressivo: new FormControl(this.dataDTO.progressivo, [
      Validators.required,
    ]),
    data: new FormControl(this.dataDTO.data),
    dataAl: new FormControl(this.dataDTO.dataAl),
  });
  lista?: Content[];

  listaAnni = [''];
  constructor(
    private ricercaDoc: RicercaDocumentiService,
    private listaAnniService: ListaAnniService
  ) {}
  ngOnInit(): void {
    this.callListaAnni();
  }
  callListaAnni() {
    this.listaAnniService
      .callListaAnni()
      .subscribe((r) => (this.listaAnni = r));
  }

  callApi() {
    this.ricercaDoc
      .ricercaDoc({
        protocollo: {
          tipo: this.interaForm.value.tipo!,
          anno: this.interaForm.value.anno!,
          progressivo: this.interaForm.value.progressivo!,
        },
        dataProtocolloDA: converter(this.interaForm.value.data),
        dataProtocolloA: converter(this.interaForm.value.dataAl, 'yyyy-MM-dd'),
      })
      .subscribe(({ payload }) => {
        this.lista = payload.listaDocumentiRecord.content;
      });
  }
}
