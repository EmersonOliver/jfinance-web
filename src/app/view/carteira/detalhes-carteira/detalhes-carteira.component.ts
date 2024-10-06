import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContasComponent } from 'src/app/components/modal/modal-contas/modal-contas.component';
import { ContasService } from 'src/app/core/contas.service';
import { ContasResponse } from 'src/app/shared/model/response/contas.response.mode';

@Component({
  selector: 'app-detalhes-carteira',
  templateUrl: './detalhes-carteira.component.html',
  styleUrls: ['./detalhes-carteira.component.css']
})
export class DetalhesCarteiraComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private modal: NgbModal) {


  }
  contas: ContasResponse[] = [];
  custoFixo: ContasResponse[] = [];
  ngOnInit(): void {
    this.contasService.getAllContas().subscribe(res => {
      this.contas = res.body ?? [];
    });

    this.contasService.getAllCustoFixo().subscribe(
      res => {
        this.custoFixo = res.body ?? []
      }
    )
  }

  abrirModalConta(){
    this.modal.open(ModalContasComponent, { size: 'lg', windowClass: 'fade-in' })
  }

}
