import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { ModalComprasComponent } from 'src/app/components/modal/modal-compras/modal-compras.component';
import { CartaoService } from 'src/app/core/cartao.service';
import { CartaoModel } from 'src/app/shared/model/request/cartao.model';
import { CartaoResponse } from 'src/app/shared/model/response/cartao.response.model';
import { ComprasResponse } from 'src/app/shared/model/response/compras.response.model';
import { FaturaResponse } from 'src/app/shared/model/response/fatura.response.model';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartaoService: CartaoService, private modal: NgbModal,
    private spinner: NgxSpinnerService, private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
  }
  id!: string;
  card: CartaoResponse | null = null;
  faturas: FaturaResponse[] = [];
  filtroForm!:FormGroup;

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe(params => {
      this.id = params['idCartao'];
      setTimeout(() => {
        this.cartaoService.loadCartaoById(this.id).subscribe(res => this.card = res.body);
        this.spinner.hide();
      }, 100)
    });
    

    this.filtroForm = new FormGroup({
      periodo: new FormControl(null)
    });
  }
  abrirModal(compra: ComprasResponse) {
    this.spinner.show();
    const ref = this.modal.open(ModalComprasComponent, { size: 'lg', windowClass: 'fade-in' });
    ref.componentInstance.setCompra(compra);
  }

}
