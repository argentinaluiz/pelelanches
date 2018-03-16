import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ClientDataService } from '../client-data.service';
import { MatTableDataSource} from '@angular/material';
import { FormsModule, NgForm } from '@angular/forms' ;
import { Title } from '@angular/platform-browser';

  
@Component({
  selector: 'app-pele-item',
  templateUrl: './pele-item.component.html', 
  styleUrls: ['./pele-item.component.css'] ,
  providers: [ClientDataService]

})
export class PeleItemComponent implements OnInit {

xUnit = 15.01;


  
 
  peleItemList: Item[]=[];
  selectedItem: Item = new Item();
  

    constructor( private clientData : ClientDataService) { }
 
  getItems(){    
    this.clientData.getPeleItems()
    .subscribe(items => {
      this.peleItemList = items;
      //console.log('data from service' + this.peleItemList[0].itemSelectedMesa);
    }) 
  } 
 

  addItem(form){
    let newItem: Item = {
      selectedMesa: form.value.selectedMesa,
      selectedQtdeE: form.value.selectedQtdeE,
      selectedEat: form.value.selectedEat,
      selectedQtdeD: form.value.selectedQtdeD,
      selectedDrink: form.value.selectedDrink,
      totalCount: this.selectedItem.totalCount //como o valor não vem de formulário, pegamos diretamente o totalCount que está em selectedItem
    }

      
   
   this.clientData.addPeleItem(newItem)
       .subscribe(item => {
          console.log(item);
          this.getItems();
       }); 
  }

  calcularTotal(){
      let valor1 = +this.selectedItem.selectedMesa;
      let valor2 = +this.selectedItem.selectedQtdeE;
      this.selectedItem.totalCount = !isNaN(valor1) && !isNaN(valor2) ? valor1 * valor2:0;
      //verificar se realmente temos números válidos nas variáveis, senão será zero
      return this.selectedItem.totalCount;
      
   }


  deleteItem(id){
    this.clientData.deletePeleItem(id)
    .subscribe(data => {
      console.log(data);
      if(data.n == 1){
        for(var i = 0; i < this.peleItemList.length; i++){
          if(id == this.peleItemList[i]._id){
            this.peleItemList.splice(i , 1);
          }
        }
      }
    })
  }

  setSelectedItem(item){
    this.selectedItem = item
   }

   editItem(form){
    let newItem: Item = {
      _id: this.selectedItem._id ,
      selectedMesa: form.value.selectedMesa,
      selectedQtdeE: form.value.selectedQtdeE,
      selectedEat: form.value.selectedEat,
      selectedQtdeD: form.value.selectedQtdeD,
      selectedDrink: form.value.selectedDrink,
      totalCount: form.value.totalCount
    }

      this.clientData.updatePeleItem(newItem)
      .subscribe( result => {
        console.log( 'item original foi atualizado do valor velho:' + result);
        this.getItems();
      });
   
          
   }


   



  ngOnInit() {
    this.getItems();    
   }
 
   displayedColumns = ['mesas', 'qtdes', 'lanches','drinks', 'totals', 'editar', 'deletar'];
   dataSource = new MatTableDataSource(this.peleItemList);


   


  }
 
   
