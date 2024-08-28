import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartaoComponent } from '../view/cartao/cartao.component';
import { ModalCartoesComponent } from '../components/modal/modal-cartoes/modal-cartoes.component';
import { ReloadServiceService } from '../shared/reload-service.service';
import { ModalComprasComponent } from '../components/modal/modal-compras/modal-compras.component';
import { ModalLancamentosComponent } from '../components/modal/modal-lancamentos/modal-lancamentos.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() updateDashboard: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modal: NgbModal,private reloadService: ReloadServiceService) { }

  ngOnInit(): void {}

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
}
