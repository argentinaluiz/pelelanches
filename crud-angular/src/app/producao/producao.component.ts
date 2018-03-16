import { Component, OnInit, Input } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Router } from '@angular/router';
import { Item } from '../item';

import { MatTableDataSource} from '@angular/material';
import { FormsModule, NgForm } from '@angular/forms' ;

@Component({
  selector: 'app-producao',
  templateUrl: './producao.component.html',
  styleUrls: ['./producao.component.css']
})
export class ProducaoComponent implements OnInit {

  peleItemList: Item[]=[];
  selectedItem: Item = new Item();

  constructor(private router: Router, private clientData: ClientDataService ) { }

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

  displayedColumns = ['mesas', 'qtdes', 'lanches'];
   dataSource = new MatTableDataSource(this.peleItemList);

  picon:any = "../assets/prod-icon.png"

  submit(){
    this.router.navigate(['estoque']);
  }

}
   