import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BalcaoComponent } from './balcao/balcao.component';
import { ProducaoComponent } from './producao/producao.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { GarcomComponent } from './garcom/garcom.component';
import { CaixaComponent } from './caixa/caixa.component';
import { PeleItemComponent } from './pele-item/pele-item.component';


   
  
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},

  { 
    path:'home',
    component: HomeComponent
  },
  {
    path:'balcao',
    component:BalcaoComponent
  },
  {
    path:'producao',
    component:ProducaoComponent
  },
  {
    path:'estoque',
    component:EstoqueComponent
  },
  {
    path:'garcom',
    component:GarcomComponent
  },
  {
    path:'caixa',
    component:CaixaComponent
  },
  {
    path:'teste',
    component:PeleItemComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } 

]; 

@NgModule({
  imports: [FormsModule,MaterialModule, RouterModule.forRoot(routes)],
  exports: [FormsModule,MaterialModule, RouterModule],
  declarations: [HomeComponent, BalcaoComponent, ProducaoComponent, EstoqueComponent, GarcomComponent, CaixaComponent, PeleItemComponent ]
})
export class AppRoutingModule { }
 