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
      totalCount: form.value.totalCount
    }
      
   
   this.clientData.addPeleItem(newItem)
       .subscribe(item => {
          console.log(item);
          this.getItems();
       }); 
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
 
   
