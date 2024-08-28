import { CartaoResponse } from "./cartao.response.model";
import { ParcelaResponse } from "./parcela.response.model";

export interface ComprasResponse {
    idCompra:number;
    idCartao:string;
    descricao:string;
    tipoLancamento:string;
    qtdParcelas:number;
    valorCompra:number;
    dataCompra:Date;
    cartao:CartaoResponse;
    parcelas:Array<ParcelaResponse>;
}