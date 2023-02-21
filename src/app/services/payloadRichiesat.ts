export interface Protocollo {
  tipo: string;
  anno: string;
  progressivo: string;
}
export interface PkPoRicDocPoRicDocInput {
  ckRifPro?: string;
  ckUoCar?: string;
  ckUoMit?: string;
  ckUoPrt?: string;
  codAbiUO?: string;
  codDocFis?: string;
  codUtente?: number;
  dataEvidenzaA?: string;
  dataEvidenzaDA?: string;
  dataProtocolloA?: string;
  dataProtocolloDA?: string;
  dtCarA?: string;
  dtCarDA?: string;
  dtIdeDocA?: string;
  dtIdeDocDA?: string;
  dtIdeMovA?: string;
  dtIdeMovDA?: string;
  dtRifProA?: string;
  dtRifProDA?: string;
  flgRis?: string;
  flgTestOgg?: string;
  tipNom?: string;
  tipProto?: string;
  uoColProfiliStoricizzati?: string;
  protocollo: Protocollo;
}
export interface Pageable {
  eseguiCount: boolean;
  page: number;
  size: number;
}
export interface Data {
  pageable: Pageable;
  pkPoRicDocPoRicDocInput: PkPoRicDocPoRicDocInput;
}
