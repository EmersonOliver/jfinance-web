import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { CarteiraService } from 'src/app/core/carteira.service';
import { MovimentacoesService } from 'src/app/core/movimentacoes.service';
import { CarteiraResponse } from 'src/app/shared/model/response/carteira.response.model';
import { MovimentacoesResponse } from 'src/app/shared/model/response/movimentacoes.response.model';

@Component({
  selector: 'app-modal-carteira',
  templateUrl: './modal-carteira.component.html',
  styleUrls: ['./modal-carteira.component.css']
})
export class ModalCarteiraComponent implements OnInit {

  carteiraForm!: FormGroup;
  carteiras: CarteiraResponse[] = [];
  movimentacoes: MovimentacoesResponse[] = [];
  carteiraSelecionada!: CarteiraResponse;
  isEditar = false;

  constructor(public modal: NgbActiveModal, private spinner: NgxSpinnerService, private carteiraService: CarteiraService, private movimentacaoService: MovimentacoesService) { }

  ngOnInit(): void {
    this.carteiraForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      agencia: new FormControl(null),
      conta: new FormControl(null),
      dv: new FormControl(null),
      valor: new FormControl(null)

    });
    this.carteiraService.loadlAllCarteiras().subscribe(res => this.carteiras = res.body ?? []);
  }
  submit() {
    this.spinner.show();
    if (this.carteiraForm.invalid) {
      this.spinner.hide();
      window.alert('Preencha os campos obrigatorios');
      return;
    }
    if (!this.isEditar) {
      this.carteiraService.salvar(this.carteiraForm.value).subscribe(res => {
        window.alert('Cadastrado com sucesso!');
        window.location.reload();
        this.spinner.hide();
      },
        error => {
          window.alert('Houve uma falha');
          this.spinner.hide();
        });

    } else {
      this.carteiraService.atualizar(this.carteiraForm.get('idCarteira')?.value, this.carteiraForm.value).subscribe(res => {
        window.alert('Atualizado com sucesso!')
        this.spinner.hide();
        window.location.reload();
      }
        , error => { window.alert('Houve um erro --> ' + error.message) })
      this.spinner.hide();

      this.isEditar = false;
    }
  }
  preencherEditar(carteira: CarteiraResponse) {
    this.isEditar = true;
    this.carteiraForm = new FormGroup({
      idCarteira: new FormControl(carteira.idCarteira),
      idCartao: new FormControl(carteira.idCartao),
      nome: new FormControl(carteira.nome, Validators.required),
      agencia: new FormControl(carteira.agencia),
      conta: new FormControl(carteira.conta),
      dv: new FormControl(carteira.dv),
      valor: new FormControl(carteira.valor)
    });
  }
  detalharCarteira(carteira: CarteiraResponse) {
    this.spinner.show();
    setTimeout(() => {
      this.movimentacaoService.carregarMovimentacoesbyCarteira(carteira.idCarteira).subscribe(
        res => this.movimentacoes = res.body ?? []
      );
      this.carteiraSelecionada = carteira;
      this.spinner.hide();
    }, 100);
  }
  detalharCarteiraByMes(data: Array<Date>) {
    this.movimentacaoService.carregarMovimentacoesByCarteiraAndData(this.carteiraSelecionada.idCarteira, data).subscribe(
      res=> this.movimentacoes = res.body ?? []
    )
  }

}
