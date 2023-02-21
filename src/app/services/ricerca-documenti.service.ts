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

  ricercaDoc(data: PkPoRicDocPoRicDocInput) {
    const pageable = {
      eseguiCount: true,
      page: 0,
      size: 30,
    };
    const rowData: Data = {
      pageable,
      pkPoRicDocPoRicDocInput: {
        ...data,
        codAbiUO: '1',
        codUtente: 1,
        flgTestOgg: 'OR',
        uoColProfiliStoricizzati: 'GCFF',
      },
    };

    return this.http.post<Response>(this.url, { ...pageable, ...rowData });
  }
}
