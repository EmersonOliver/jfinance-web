import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { FaturaService } from 'src/app/core/fatura.service';
import { FaturaResponse } from 'src/app/shared/model/response/fatura.response.model';

@Component({
  selector: 'app-modal-fatura',
  templateUrl: './modal-fatura.component.html',
  styleUrls: ['./modal-fatura.component.css']
})
export class ModalFaturaComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private spinner: NgxSpinnerService, private faturaService: FaturaService) { }

  id!: string;
  faturas: FaturaResponse[] | null = [];

  setIdCartao(id: string) {
    this.id = id;
  }


  ngOnInit(): void {
    if (this.id != undefined && this.id != null) {
      this.faturaService.loadFaturaByIdCartao(this.id).subscribe(res => {
        this.faturas = res.body;
      });
    }
  }

}
