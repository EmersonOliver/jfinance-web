import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComprasResponse } from 'src/app/shared/model/response/compras.response.model';

@Component({
  selector: 'app-modal-compras',
  templateUrl: './modal-compras.component.html',
  styleUrls: ['./modal-compras.component.css']
})
export class ModalComprasComponent implements OnInit {

  compra: ComprasResponse | null = null;
 

  constructor(public modal: NgbActiveModal, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    console.log(this.compra)
  }

  setCompra(compra:ComprasResponse) { this.compra = compra; 
  
    setTimeout(()=>{
      this.spinner.hide();
    }, 100)
  
  }


}
