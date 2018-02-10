import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ClientDataService } from '../client-data.service';
import { MatTableDataSource} from '@angular/material';
import { FormsModule, NgForm } from '@angular/forms' ;

  
@Component({
  selector: 'app-pele-item',
  templateUrl: './pele-item.component.html',
  styleUrls: ['./pele-item.component.css'] ,
  providers: [ClientDataService]

})
export class PeleItemComponent implements OnInit {
 
  peleItemList: Item[]=[];

    constructor( private clientData : ClientDataService) { 
   
  }
 
  getItems(){    
    this.clientData.getPeleItems()
    .subscribe(items => {
      this.peleItemList = items;
      //console.log('data from service' + this.peleItemList[0].itemSelectedMesa);
    }) 
  } 


  addItem(form){
    let newItem: Item = {
      itemSelectedMesa: form.value.itemSelectedMesa,
      itemSelectedQtde: form.value.itemSelectedQtde,
      itemSelectedLanche: form.value.itemSelectedLanche,
      itemTotalBread: form.value.itemTotalBread,
      itemTotalCount: form.value.itemTotalCount
    }
       this.clientData.addPeleItem(newItem)
       .subscribe(item => {
          console.log(item);
          this.getItems();
       });
  }



  ngOnInit() {
    this.getItems();    
   }
 
   displayedColumns = ['mesas', 'qtdes', 'lanches','totalpaes', 'totals'];
   dataSource = new MatTableDataSource(this.peleItemList);


   


  }
 
   
 

