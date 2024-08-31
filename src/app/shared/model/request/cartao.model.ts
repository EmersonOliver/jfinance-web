export interface CartaoModel {
    cartaoReferencia:string;
    apelido:string;
    digitosFinais:string;
    diaFechamento:number;
    diaVencimento:number;
    tipoCartao:string;
    vlLimiteTotal:number;
    vlLimiteUtilizado:number;
    vlSaldo:number;
}