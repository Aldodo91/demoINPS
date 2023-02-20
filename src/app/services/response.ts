export interface Response {
    payload: Payload,
}
export interface Payload {
    listaDocumentiRecord: ListaDocumentiRecord
}

interface ListaDocumentiRecord {
    content: Content[],
    next: boolean,
    pageable: any,
    rowCount: number
}
interface ProtocolloInput {

    tipo: string,
    anno: string,
    progressivo: number

}
interface ProtocolloAnnoPrecedente {
    tipo: string,
    anno: string,
    progressivo: number
}
interface MittentiDocumento {
    tipMit: string,
    codMit: string,
    dscMit: string
}
interface Totali {
    totFas: number,
    totMit: number,
    totAll: number,
    totCol: number,
    totColAl: number,
    totSto: number,
    totInt: number,
    totEmail: number,
    totFile: number,
    totSts: number,
    totPra: number
}
export interface Content {
    protocolloInput: ProtocolloInput,
    testoOggetto: string,
    tipProto: string,
    dataOraPrt: string,
    dataOraArr: string,
    docFisico: string,
    dscDocFisico: string,
    docLogico: any,
    dscDocLogico: any,
    sttLogico: any,
    dscSttLogico: any,
    dscNot: any,
    strOrgPrt: string,
    dscStrOrgPrt: string,
    utePrt: string,
    dscUtePrt: string,
    rifPro: string,
    dataRifPro: string,
    ultIde: any,
    dataUltIde: any,
    flgRis: string,
    flgModDoc: string,
    dataEvd: any,
    dataInserimento: string,
    uteAnn: any,
    dscUteAnn: any,
    strOrgAnn: any,
    dscStrOrgAnn: any,
    dscAnn: any,
    dataAnn: any,
    docRis: any,
    protocolloAnnoPrecedente: ProtocolloAnnoPrecedente,
    checkAbilitazione: string,
    descrizioneMittenteDocumento: string,
    descrizioneMittentiDocumento: string[],
    mittentiDocumento: MittentiDocumento[],
    totali: Totali,
    listaSelDettaglioCop: ListaSelDettaglioCop[]
}

interface ListaSelDettaglioCop {
    prgCopPrt: number,
    flgOri: string,
    desCar: string,
    dscDesCar: any,
    dscStrOrg: string,
    uteCar: number,
    dscUteCar: string,
    tipDes: string,
    tipAna: any,
    tipInv: any,
    cla: any,
    flgAsg: string
}
