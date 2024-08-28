import { ComprasResponse } from "./compras.response.model";
import { FaturaResponse } from "./fatura.response.model";

export interface CartaoResponse {
    idCartao:string;
    apelido:string;
    digitosFinais:string;
    diaFechamento:number;
    diaVencimento:number;
    tipoCartao:string;
    vlLimiteTotal:number;
    vlLimiteUtilizado:number;
    icAtivo:boolean;
    compras: Array<ComprasResponse>;
    faturas:Array<FaturaResponse>;
}