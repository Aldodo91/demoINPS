import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, PkPoRicDocPoRicDocInput, Protocollo } from './payloadRichiesat';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class RicercaDocumentiService {
  constructor(private http: HttpClient) {}
  url =
    'http://app-na-cdr-sv01.dl-app.maticmind.it:9080/restgwp/api/gwprotocollo/richiestaDocumenti/ricercadocumento';

  ricercaDoc(data: Protocollo, dataDal: Date | null | undefined) {
    console.log('chiamo con ', data, dataDal);
    const rowData: Data = {
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
        protocollo: { ...data },
        dataProtocolloDA: dataDal,
      },
    };

    return this.http.post<Response>(this.url, rowData);
  }
}
