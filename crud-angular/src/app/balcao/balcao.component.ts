import { Component, OnInit, Input } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Router } from '@angular/router';

import { Item } from '../item';

import { MatTableDataSource} from '@angular/material';
import { FormsModule, NgForm } from '@angular/forms' ;
 
@Component({ 
  selector: 'app-balcao',
  templateUrl: './balcao.component.html',
  styleUrls: ['./balcao.component.css']
})
export class BalcaoComponent implements OnInit {

  peleItemList: Item[]=[];
  selectedItem: Item = new Item();
  

  constructor( private router: Router, private clientData: ClientDataService ) { }

  getItems(){    
    this.clientData.getPeleItems()
    .subscribe(items => {
      this.peleItemList = items;
      //console.log('data from service' + this.peleItemList[0].itemSelectedMesa);
    }) 
  }  

  ngOnInit() {
    this.getItems();
  }

  displayedColumns = ['mesas', 'qtdesL', 'lanches','qtdesB', 'bebidas', 'total'];
   dataSource = new MatTableDataSource(this.peleItemList);
 
  bicon:any = "../assets/b-icon.png"
  logo:any = "../assets/logoN.png"

  submit(){
    this.router.navigate(['garcom'])
  }

  selected = 'choose';
   
}
 