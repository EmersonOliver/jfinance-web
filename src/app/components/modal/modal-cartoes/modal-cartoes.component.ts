import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoService } from 'src/app/core/cartao.service';
import { CartaoResponse } from 'src/app/shared/model/response/cartao.response.model';

@Component({
  selector: 'app-modal-cartoes',
  templateUrl: './modal-cartoes.component.html',
  styleUrls: ['./modal-cartoes.component.css']
})
export class ModalCartoesComponent implements OnInit {

  cartaoForm!: FormGroup;

  @Output() updateDashboard: EventEmitter<any> = new EventEmitter<any>();


  constructor(public modal: NgbActiveModal, private cartaoService: CartaoService) { }

  metodo = 'Incluir';
  isEditar = false;
  cartoes: CartaoResponse[] = [];
  ngOnInit(): void {
    this.cartaoService.listarTodos().subscribe(res => this.cartoes = res.body ?? []);

    this.cartaoForm = new FormGroup({
      idCartao: new FormControl(null),
      apelido: new FormControl(null),
      digitosFinais: new FormControl(null),
      diaFechamento: new FormControl(null),
      diaVencimento: new FormControl(null),
      tipoCartao: new FormControl(null),
      vlLimiteTotal: new FormControl(null),
      vlLimiteUtilizado: new FormControl(null)
    });
  }

  preencherEditar(cartao: CartaoResponse) {
    this.metodo = 'Editar';
    this.isEditar = true;
    this.cartaoForm = new FormGroup({
      idCartao: new FormControl(cartao.idCartao),
      apelido: new FormControl(cartao.apelido),
      digitosFinais: new FormControl(cartao.digitosFinais),
      diaFechamento: new FormControl(cartao.diaFechamento),
      diaVencimento: new FormControl(cartao.diaVencimento),
      tipoCartao: new FormControl(cartao.tipoCartao),
      vlLimiteTotal: new FormControl(cartao.vlLimiteTotal),
      vlLimiteUtilizado: new FormControl(cartao.vlLimiteUtilizado)
    });

  }

  onSubmit() {
    if(!this.isEditar){
      console.log(this.cartaoForm.value)
      this.cartaoService.cadastrarCartao(this.cartaoForm.value).subscribe(
        res=> {
          window.alert('Salvo com sucesso!');
          this.updateDashboard.emit();
        },
       error => {window.alert('Ocorreu um erro ->'+ error.message)}) 
    }
  }

  resetForm(){
    this.cartaoForm.reset();
    this.isEditar = false;
    this.metodo = 'Incluir';
  }

}
