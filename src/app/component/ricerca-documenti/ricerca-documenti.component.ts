import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Protocollo } from 'src/app/classes/protocollo';
import { ListaAnniService } from 'src/app/services/lista-anni.service';
import { Data } from 'src/app/services/payloadRichiesat';
import { Content, Payload } from 'src/app/services/response';
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
  };
  interaForm = new FormGroup({
    tipo: new FormControl(this.dataDTO.tipo, [Validators.required]),
    anno: new FormControl(this.dataDTO.anno, [Validators.required]),
    progressivo: new FormControl(this.dataDTO.progressivo, [
      Validators.required,
    ]),
    data: new FormControl(this.dataDTO.data),
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
      .callListaAnni({
        codiceApplicazione: 'PRO',
        tipoRepertorio: '',
        tipoSelezione: 'GU',
      })
      .subscribe((r) => (this.listaAnni = r));
  }
  callApi() {
    this.ricercaDoc
      .ricercaDoc(
        {
          tipo: this.interaForm.value.tipo!,
          anno: this.interaForm.value.anno!,
          progressivo: this.interaForm.value.progressivo!,
        },
        this.interaForm.value.data
      )
      .subscribe(({ payload }) => {
        this.lista = payload.listaDocumentiRecord.content;
      });
  }
}
