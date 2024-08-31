import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-debito',
  templateUrl: './card-debito.component.html',
  styleUrls: ['./card-debito.component.css']
})
export class CardDebitoComponent implements OnInit {

  @Input() nome!: string;
  @Input() saldoUtilizado!: string;
  @Input() saldoRestante!: string;
  @Input() saldoReferencia!: string;
  @Input() digitosFinais!: string;
  @Input() cardHolder!: string;
  @Input() expires!: string;
  @Input() disabled = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
