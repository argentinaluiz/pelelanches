import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data.service';

import { Item } from '../item';

import { MatTableDataSource} from '@angular/material';
import { FormsModule, NgForm } from '@angular/forms' ;
  
@Component({    
  selector: 'app-garcom', 
  templateUrl: './garcom.component.html',
  styleUrls: ['./garcom.component.css']
})
export class GarcomComponent implements OnInit {

  xUnit = 15.01;
  xFrUnit = 20.50;
  dogUnit = 16.50;
  refriUnit = 4.01;
  

  peleItemList: Item[]=[];
  selectedItem: Item = new Item(); 

  constructor(private router: Router, private clientData: ClientDataService ) { }

  waiterIcon:any = "../assets/waiter.png"
  logo:any = "../assets/logoN.png"


  addItem(form){
    let newItem: Item = {
      selectedMesa: form.value.selectedMesa,
      selectedQtdeE: form.value.selectedQtdeE,
      selectedEat: form.value.selectedEat,
      selectedQtdeD: form.value.selectedQtdeD,
      selectedDrink: form.value.selectedDrink,
      totalCount: form.value.totalCount
    }
      
   
   this.clientData.addPeleItem(newItem)
       .subscribe(item => {
          console.log(item);
          alert('Pedido efetuado com sucesso !')
       }); 
  }

   total:any = 0;
   variavel1 = 2;
   variavel2 = 4;
  

calcularTotal(){
  this.total = this.variavel1 * this.variavel2;
  return this.total
}

ngOnInit() {
  this.calcularTotal();
}

}


  /*
  submit(){    
    
    if(this.clientData.selectedLanche == 'Pelé X' ||
     this.clientData.selectedLanche == 'Pelé XFrango' ||
     this.clientData.selectedLanche == 'Pelé XDog' ||
     this.clientData.selectedLanche == 'Pelé Dogão' ||
     this.clientData.selectedLanche == 'Pelé Dogão Frango' 
     ){
             
       this.clientData.bread =  this.clientData.bread - this.clientData.selectedQtde;
       this.clientData.cheese = this.clientData.cheese - this.clientData.selectedQtde;
       this.clientData.presunt = this.clientData.presunt - this.clientData.selectedQtde;
       this.clientData.lettuce = this.clientData.lettuce - this.clientData.selectedQtde;

     //  alert('Seu pedido foi efetuado com sucesso !')
        this.clientData.askOk =  this.clientData.askOk + "Seu pedido foi efetuado com sucesso !" 
        this.clientData.totalCount = this.clientData.price * this.clientData.selectedQtde;
  
      //  this.clientData.request = 'Mesa :' +  this.clientData.selectedMesa + "\n" + 'Quantidade :' +   this.clientData.selectedQtde + "\n" + 'Lanche :' + this.clientData.selectedLanche

    //console.log(this.clientData.///total);
    //console.log(this.clientData);
    //console.log(this.clientData.conf); 

    } 

  } */

  