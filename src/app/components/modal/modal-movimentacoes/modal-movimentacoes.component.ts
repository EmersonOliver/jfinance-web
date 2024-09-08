import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarteiraService } from 'src/app/core/carteira.service';
import { MovimentacoesService } from 'src/app/core/movimentacoes.service';
import { CarteiraResponse } from 'src/app/shared/model/response/carteira.response.model';

@Component({
  selector: 'app-modal-movimentacoes',
  templateUrl: './modal-movimentacoes.component.html',
  styleUrls: ['./modal-movimentacoes.component.css']
})
export class ModalMovimentacoesComponent implements OnInit {

  carteiras: CarteiraResponse[] = [];
  movimentacaoForm!: FormGroup;
  isEditar = false;

  constructor(public modal: NgbActiveModal, private carteiraService: CarteiraService, private movimentacaoService: MovimentacoesService) { }

  ngOnInit(): void {
    this.carteiraService.loadlAllCarteiras().subscribe(res => this.carteiras = res.body ?? []);
    this.movimentacaoForm = new FormGroup({
      idCarteira: new FormControl(null),
      descricaoMovimento: new FormControl(null),
      tipoMovimentacao: new FormControl(null),
      valor: new FormControl(null),
      dtMovimentacao: new FormControl(null)
    });
  }

  onSubmit() {
    this.movimentacaoService.gerarMovimentacao(this.movimentacaoForm.value).subscribe(
      res => { window.alert('Movimentacao Gerada com sucesso!'); window.location.reload() },
      error => { window.alert('Houve um erro ao gerar movimentação') })
  }

}
