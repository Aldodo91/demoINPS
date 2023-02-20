import { Component } from '@angular/core';
import { Protocollo } from 'src/app/classes/protocollo';
import { Data } from 'src/app/services/payloadRichiesat';
import { Content, Payload } from 'src/app/services/response';
import { RicercaDocumentiService } from 'src/app/services/ricerca-documenti.service';

@Component({
  selector: 'app-ricerca-documenti',
  templateUrl: './ricerca-documenti.component.html',
  styleUrls: ['./ricerca-documenti.component.css'],
  providers:[RicercaDocumentiService]
})
export class RicercaDocumentiComponent {
  model = new Protocollo("", "", "");
  lista?: Content[];
  rowData: Data = {
    pageable: {
      eseguiCount:true,
      page: 0,
      size:30
    },
    pkPoRicDocPoRicDocInput:{
      codAbiUO:"1",
      codUtente:1,
      flgTestOgg:'OR',
      uoColProfiliStoricizzati:'GCFF',
      protocollo: {
        tipo: this.model.tipo,
        anno: this.model.anno,
        progressivo:this.model.progressivo
      }
    }
  }
  testoOggetto = "";
  risposta = {};
  constructor(private ricercaDoc: RicercaDocumentiService){}

  callApi(data:Data){
    data.pkPoRicDocPoRicDocInput.protocollo.anno = this.model.anno;
    data.pkPoRicDocPoRicDocInput.protocollo.progressivo = this.model.progressivo;
    data.pkPoRicDocPoRicDocInput.protocollo.tipo = this.model.tipo;
    console.log(this.model, data);
    this.ricercaDoc.ricercaDoc(data).subscribe(({payload})=> {
      console.log(payload);
       this.lista =  payload.listaDocumentiRecord.content
    });
  }


}
