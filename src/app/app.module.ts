import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardResumoComponent } from './components/cards/card-resumo/card-resumo.component';
import { CartaoComponent } from './view/cartao/cartao.component';
import { CarteiraComponent } from './view/carteira/carteira.component';
import { ComprasComponent } from './view/compras/compras.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ModalCarteiraComponent } from './components/modal/modal-carteira/modal-carteira.component';
import { ModalCartoesComponent } from './components/modal/modal-cartoes/modal-cartoes.component';
import { ModalComprasComponent } from './components/modal/modal-compras/modal-compras.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerConfig, BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ModalFaturaComponent } from './components/modal/modal-fatura/modal-fatura.component';
import { HomeComponent } from './view/home/home.component';
import { ModalLancamentosComponent } from './components/modal/modal-lancamentos/modal-lancamentos.component';
defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    CardResumoComponent,
    CartaoComponent,
    CarteiraComponent,
    ComprasComponent,
    DashboardComponent,
    HeaderComponent,
    ModalCarteiraComponent,
    ModalCartoesComponent,
    ModalComprasComponent,
    RangeSliderComponent,
    ModalFaturaComponent,
    HomeComponent,
    ModalLancamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: BsLocaleService, useClass: BsLocaleService },
    { provide: BsDatepickerConfig, useValue: { showWeekNumbers: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
