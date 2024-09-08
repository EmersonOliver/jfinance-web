export interface CarteiraResponse {
    idCartao:string;
    idCarteira:number;
    agencia:string;
    conta:string;
    dv:string;
    nome:string;
    movimentacao:string;
    valor:number;
    data:Date;
}

export interface SaldoCarteiraResponse {
    saldo: number;
}