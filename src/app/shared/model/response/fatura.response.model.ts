import { CartaoResponse } from "./cartao.response.model";

export interface FaturaResponse {
    idFatura:number;
    idCartao:string;
    vlFatura:number;
    situacaoFatura:string;
    dataFaturaGerada:Date;
    dataFaturaVencimento:Date;
    cartao:CartaoResponse;

}