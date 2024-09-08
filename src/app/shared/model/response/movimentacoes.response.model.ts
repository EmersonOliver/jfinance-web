import { CarteiraResponse } from "./carteira.response.model";

export interface MovimentacoesResponse {
    idMovimentacao: string;
    idCarteira: number;
    descricaoMovimento: string;
    tipoMovimentacao: string;
    valor: number;
    dtMovimentacao: Date;
    carteira: CarteiraResponse;
}