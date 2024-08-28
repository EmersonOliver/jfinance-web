import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-resumo',
  templateUrl: './card-resumo.component.html',
  styleUrls: ['./card-resumo.component.css']
})
export class CardResumoComponent implements OnInit {


  private _nome!: string;
  private _limiteUtilizado!: string;

  private _limiteRestante!: string;

  private _limiteTotal!: string;

  private _digitosFinais!: string;
  private _cardHolder!: string;
  private _expires!: string;

  @Input() disabled = false; // Nova propriedade

  
  @Input()
  public get limiteTotal(): string {
    return this._limiteTotal;
  }
  public set limiteTotal(value: string) {
    this._limiteTotal = value;
  }

  @Input()
  public get limiteUtilizado(): string {
    return this._limiteUtilizado;
  }

  public set limiteUtilizado(value: string) {
    this._limiteUtilizado = value;
  }

  @Input()
  public get limiteRestante(): string {
    return this._limiteRestante;
  }
  public set limiteRestante(value: string) {
    this._limiteRestante = value;
  }
  @Input()
  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  @Input()
  public get digitosFinais(): string {
    return this._digitosFinais;
  }
  public set digitosFinais(value: string) {
    this._digitosFinais = value;
  }

  @Input()
  public get cardHolder(): string {
    return this._cardHolder;
  }
  public set cardHolder(value: string) {
    this._cardHolder = value;
  }
  @Input()
  public get expires(): string {
    return this._expires;
  }
  public set expires(value: string) {
    this._expires = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
