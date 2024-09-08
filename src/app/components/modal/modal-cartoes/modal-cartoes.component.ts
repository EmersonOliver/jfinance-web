import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoService } from 'src/app/core/cartao.service';
import { CarteiraService } from 'src/app/core/carteira.service';
import { CartaoResponse } from 'src/app/shared/model/response/cartao.response.model';
import { CarteiraResponse } from 'src/app/shared/model/response/carteira.response.model';

@Component({
  selector: 'app-modal-cartoes',
  templateUrl: './modal-cartoes.component.html',
  styleUrls: ['./modal-cartoes.component.css']
})
export class ModalCartoesComponent implements OnInit {

  cartaoForm!: FormGroup;

  @Output() updateDashboard: EventEmitter<any> = new EventEmitter<any>();


  constructor(public modal: NgbActiveModal, private cartaoService: CartaoService, private carteiraService: CarteiraService) { }

  metodo = 'Incluir';
  isEditar = false;
  cartoes: CartaoResponse[] = [];
  carteiras: CarteiraResponse[] = [];

  ngOnInit(): void {
    this.loadInit();
    this.cartaoForm = new FormGroup({
      idCartao: new FormControl(null),
      idCarteira: new FormControl(null),
      apelido: new FormControl(null),
      digitosFinais: new FormControl(null),
      diaFechamento: new FormControl(null),
      diaVencimento: new FormControl(null),
      tipoCartao: new FormControl(null),
      vlLimiteTotal: new FormControl(null),
      vlLimiteUtilizado: new FormControl(null),
      vlSaldo: new FormControl(null),
      cartaoReferencia: new FormControl(null)
    });
  }

  preencherEditar(cartao: CartaoResponse) {
    this.metodo = 'Editar';
    this.isEditar = true;
    if (cartao.tipoCartao == 'DEBITO') {
      this.cartaoForm = new FormGroup({
        idCartao: new FormControl(cartao.idCartao),
        idCarteira: new FormControl(cartao.idCarteira),
        apelido: new FormControl(cartao.apelido),
        digitosFinais: new FormControl(cartao.digitosFinais),
        diaFechamento: new FormControl(cartao.diaFechamento),
        diaVencimento: new FormControl(cartao.diaVencimento),
        tipoCartao: new FormControl(cartao.tipoCartao),
        vlSaldo: new FormControl(cartao.vlSaldo),
        vlLimiteTotal: new FormControl(cartao.vlLimiteTotal),
        vlLimiteUtilizado: new FormControl(cartao.vlLimiteUtilizado)
      });
    } else {
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
  }

  onSubmit() {
    if (!this.isEditar) {
      console.log(this.cartaoForm.value)
      this.cartaoService.cadastrarCartao(this.cartaoForm.value).subscribe(
        res => {
          window.alert('Salvo com sucesso!');
          this.updateDashboard.emit();
          this.loadInit();
          this.resetForm();
        },
        error => { window.alert('Ocorreu um erro ->' + error.message) })
    } else {
      this.cartaoService.atualizarCartao(this.cartaoForm.get('idCartao')?.value, this.cartaoForm.value).subscribe(res => window.alert('Atualizado com sucesso!'), error => window.alert('Houve um erro'))
      this.loadInit();
    }
  }
  loadInit() {
    this.cartaoService.listarTodos().subscribe(res => this.cartoes = res.body ?? []);
    this.carteiraService.loadlAllCarteiras().subscribe(
      res => { 
        this.carteiras = res.body ?? [];
        this.carteiras = this.carteiras.filter(x=> x.idCartao == null);
      },
      error => { 
        window.alert(error) 
      });
  }

  resetForm() {
    this.cartaoForm.reset();
    this.isEditar = false;
    this.metodo = 'Incluir';
  }

  selectCarteira() {
    let valorCarteiraSelecionada = this.carteiras.find(map => map.idCarteira == this.cartaoForm.get('idCarteira')?.value)?.valor;
    this.cartaoForm.get("vlSaldo")?.setValue(valorCarteiraSelecionada);
    console.log(this.cartaoForm.value)
  }

}
