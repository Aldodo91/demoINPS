import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
interface InputListaAnni {
  codiceApplicazione: string;
  tipoSelezione: string;
  tipoRepertorio: string;
}
interface OutputListaAnni {
  payload: {
    listaAnni: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class ListaAnniService {
  url =
    'http://app-na-cdr-sv01.dl-app.maticmind.it:9080/restgwp/api/gwprotocollo/general/selezioneanno';
  constructor(private http: HttpClient) {}
  callListaAnni(
    inputListaAnni: InputListaAnni = {
      codiceApplicazione: 'PRO',
      tipoRepertorio: '',
      tipoSelezione: 'GU',
    }
  ) {
    return this.http
      .post<OutputListaAnni>(this.url, inputListaAnni)
      .pipe(map((v) => v.payload.listaAnni));
  }
}
