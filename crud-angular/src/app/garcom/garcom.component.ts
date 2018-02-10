import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data.service';

  
@Component({ 
  selector: 'app-garcom', 
  templateUrl: './garcom.component.html',
  styleUrls: ['./garcom.component.css']
})
export class GarcomComponent implements OnInit {

  

  constructor(private router: Router, private clientData: ClientDataService ) { }

   

  waiterIcon:any = "../assets/waiter.png"
  logo:any = "../assets/logoN.png"
  
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

  ngOnInit() {
   
    }

}