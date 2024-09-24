import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ParcelasService } from 'src/app/core/parcelas.service';
import { ComprasResponse } from 'src/app/shared/model/response/compras.response.model';

@Component({
  selector: 'app-modal-compras',
  templateUrl: './modal-compras.component.html',
  styleUrls: ['./modal-compras.component.css']
})
export class ModalComprasComponent implements OnInit {

  compra: ComprasResponse | null = null;


  constructor(public modal: NgbActiveModal, private spinner: NgxSpinnerService, private parcelaService:ParcelasService) { }
  situacaoParcela = [
    { situacao: "PAGA" },
    { situacao: "ISENTA" },
    { situacao: "VENCIDA" },
    { situacao: "PENDENTE" }
  ];


  ngOnInit(): void {
    console.log(this.compra)
  }
  changeSituacao(idParcela:number, situacao:string) {
   this.parcelaService.atualizarParcelas(idParcela, situacao).subscribe(res=> {
    window.alert('Parcela Alterada');
  });
  }

  setCompra(compra: ComprasResponse) {
    const parcelas = compra.parcelas.sort((a, b) => a.parcela - b.parcela);   
    this.compra = compra;
    this.compra.parcelas = parcelas;

    setTimeout(() => {
      this.spinner.hide();
    }, 100)

  }


}
