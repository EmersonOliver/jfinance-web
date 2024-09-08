import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoComponent } from '../view/cartao/cartao.component';
import { ModalCartoesComponent } from '../components/modal/modal-cartoes/modal-cartoes.component';
import { ReloadServiceService } from '../shared/reload-service.service';
import { ModalComprasComponent } from '../components/modal/modal-compras/modal-compras.component';
import { ModalLancamentosComponent } from '../components/modal/modal-lancamentos/modal-lancamentos.component';
import { CarteiraService } from '../core/carteira.service';
import { SaldoCarteiraResponse } from '../shared/model/response/carteira.response.model';
import { ModalCarteiraComponent } from '../components/modal/modal-carteira/modal-carteira.component';
import { ModalMovimentacoesComponent } from '../components/modal/modal-movimentacoes/modal-movimentacoes.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() updateDashboard: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modal: NgbModal,private reloadService: ReloadServiceService, private cateiraService:CarteiraService) { }

  saldoResponse!: SaldoCarteiraResponse;

  ngOnInit(): void {
    setTimeout(() => {
      
      this.cateiraService.loadSaldoCarteira().subscribe(
        res=>{
          this.saldoResponse = res.body ?? {saldo:0};
        }
      );
    }, 100);

  }

  abrirCartoes() {
    const ref = this.modal.open(ModalCartoesComponent, { size: 'lg', windowClass: 'fade-in' });
    ref.componentInstance.updateDashboard.subscribe(()=>{
      setTimeout(() => {
        this.reloadService.triggerReload();
      }, 100);
    })
  }
  abrirCompras() {
    const ref = this.modal.open(ModalLancamentosComponent,  { size: 'lg', windowClass: 'fade-in' });
  }

  abrirCarteira() {
    const ref = this.modal.open(ModalCarteiraComponent, { size: 'lg', windowClass: 'fade-in' });
  }
  abrirMovimentacoes() {
    const ref = this.modal.open(ModalMovimentacoesComponent, { size: 'lg', windowClass: 'fade-in' });
  }
}
