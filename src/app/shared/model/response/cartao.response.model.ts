import { CarteiraResponse } from "./carteira.response.model";
import { ComprasResponse } from "./compras.response.model";
import { FaturaResponse } from "./fatura.response.model";

export interface CartaoResponse {
    idCartao:string;
    apelido:string;
    idCarteira:number;
    digitosFinais:string;
    diaFechamento:number;
    diaVencimento:number;
    tipoCartao:string;
    vlLimiteTotal:number;
    vlLimiteUtilizado:number;
    vlLimiteRestante:number;
    icAtivo:boolean;
    vlSaldo:number;
    vlSaldoRestante:number;
    vlSaldoUtilizado:number;
    cartaoReferencia:string;
    compras: Array<ComprasResponse>;
    faturas:Array<FaturaResponse>;
    carteira:CarteiraResponse;
}