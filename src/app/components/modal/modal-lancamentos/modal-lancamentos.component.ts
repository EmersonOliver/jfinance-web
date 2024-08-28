import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoService } from 'src/app/core/cartao.service';
import { ComprasService } from 'src/app/core/compras.service';
import { CartaoResponse } from 'src/app/shared/model/response/cartao.response.model';

@Component({
  selector: 'app-modal-lancamentos',
  templateUrl: './modal-lancamentos.component.html',
  styleUrls: ['./modal-lancamentos.component.css']
})
export class ModalLancamentosComponent implements OnInit {

  comprasForm!:FormGroup;

  constructor(public modal: NgbActiveModal, private cartaoService:CartaoService, private comprasService:ComprasService) { }

  cartoes: Array<CartaoResponse> | null = [];

  ngOnInit(): void {
    this.comprasForm = new FormGroup({
      idCartao:new FormControl(null),
      descricao: new FormControl(null),
      tipoLancamento: new FormControl(null),
      qtdParcelas: new FormControl(null),
      valorCompra: new FormControl(null),
      dataCompra: new FormControl(this.formatDate(new Date())),
    });

    this.cartaoService.listarTodos().subscribe(
      res=>{
        this.cartoes = res.body 
      }
    )
  }
  onSubmit(){
    console.log(this.comprasForm.value)
    this.comprasService.cadastrarCompra(this.comprasForm.value).subscribe(res=> window.alert('Cadastro com sucesso!'));
    
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
