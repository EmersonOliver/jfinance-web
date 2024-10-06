import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { CartaoComponent } from './view/cartao/cartao.component';
import { HomeComponent } from './view/home/home.component';
import { DetalhesCarteiraComponent } from './view/carteira/detalhes-carteira/detalhes-carteira.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'cartao/:idCartao', component:CartaoComponent},
  {path:'detalhes-carteira', component:DetalhesCarteiraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
