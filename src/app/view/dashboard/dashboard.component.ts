import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/core/dashboard.service';
import { CartaoResponse } from 'src/app/shared/model/response/cartao.response.model';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { FormControl, FormGroup } from '@angular/forms';
import { FaturaResponse } from 'src/app/shared/model/response/fatura.response.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFaturaComponent } from 'src/app/components/modal/modal-fatura/modal-fatura.component';
import { Subscription } from 'rxjs';
import { ReloadServiceService } from 'src/app/shared/reload-service.service';
import { CartaoService } from 'src/app/core/cartao.service';
import { ModalCartoesComponent } from 'src/app/components/modal/modal-cartoes/modal-cartoes.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @Input() cards: CartaoResponse[] | null = null;  groupedCards: any[][] = [];

  private reloadSubscription!: Subscription;
 
  filtroForm!: FormGroup;
  faturas: Array<FaturaResponse> | null = [];
  filtrado = false;

  constructor(private dashboardService:DashboardService, private spinner:NgxSpinnerService,
    private cartaoService:CartaoService,
     private localeService: BsLocaleService,private modal: NgbModal,private reloadService: ReloadServiceService) { 
    this.localeService.use('pt-br');

  }

  ngOnInit(): void {
    this.carregarCartoes();

   this.filtroForm = new FormGroup({
    periodo: new FormControl(null)
   });
   this.reloadSubscription = this.reloadService.reload$.subscribe(() => {
    window.location.reload();

  });
   
  }

  carregarCartoes() {
    this.spinner.show();
    setTimeout(() => {
      this.dashboardService.loadAllCards().subscribe(
        res=>{
          this.cards = res.body;
          this.groupCards();
          this.spinner.hide();
        }
      );
    }, 100);
  }

  groupCards() {
    for (let i = 0; i < this.cards!.length; i += 3) {
      this.groupedCards.push(this.cards!.slice(i, i + 3));
    }
  }
  buscar() {
    if(this.filtroForm.invalid){
      window.alert('Aplique um filtro')
      return;
    }
    this.spinner.show();
    setTimeout(() => {
      this.dashboardService.carregarFaturaByData(this.filtroForm.get('periodo')?.value).subscribe(
        res=> {
          this.faturas = res.body;
          this.spinner.hide();
        }
      );
      this.filtrado = true;
    }, 100);
  }

  detalharFatura(id:string) {
      const ref = this.modal.open(ModalFaturaComponent, { size: 'lg', windowClass: 'fade-in' });
      ref.componentInstance.setIdCartao(id);
  }

  deleteCard(id:string) {
    this.cartaoService.inativarCartao(id).subscribe(res=>{
      window.alert('Cartao inativado');
      window.location.reload();
    });
  }

  abrirModalCartao(){
    this.modal.open(ModalCartoesComponent, { size: 'lg', windowClass: 'fade-in' });
  }

}
