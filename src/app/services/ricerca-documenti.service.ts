import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './payloadRichiesat';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class RicercaDocumentiService {
  constructor(private http: HttpClient) {}
  url =
    'http://app-na-cdr-sv01.dl-app.maticmind.it:9080/restgwp/api/gwprotocollo/richiestaDocumenti/ricercadocumento';
  ricercaDoc(data: Data) {
    return this.http.post<Response>(this.url, data);
  }
}
