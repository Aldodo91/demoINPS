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
  model = new Protocollo('', '', '');
  lista?: Content[];
  rowData: Data = {
    pageable: {
      eseguiCount: true,
      page: 0,
      size: 30,
    },
    pkPoRicDocPoRicDocInput: {
      codAbiUO: '1',
      codUtente: 1,
      flgTestOgg: 'OR',
      uoColProfiliStoricizzati: 'GCFF',
      protocollo: {
        tipo: this.model.tipo,
        anno: this.model.anno,
        progressivo: this.model.progressivo,
      },
    },
  };

  listaAnni?: string[];
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
  callApi(data: Data) {
    data.pkPoRicDocPoRicDocInput.protocollo.anno = this.model.anno;
    data.pkPoRicDocPoRicDocInput.protocollo.progressivo =
      this.model.progressivo;
    data.pkPoRicDocPoRicDocInput.protocollo.tipo = this.model.tipo;
    this.ricercaDoc.ricercaDoc(data).subscribe(({ payload }) => {
      this.lista = payload.listaDocumentiRecord.content;
    });
  }
}
