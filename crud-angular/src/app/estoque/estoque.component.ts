import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data.service';

@Component({ 
  selector: 'app-estoque',
  templateUrl: './estoque.component.html', 
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  constructor( private router: Router, private clientData: ClientDataService ) { }

  ngOnInit() { }

  eicon:any = '../assets/stock.png';

submit(){
  this.router.navigate(['caixa']);
   }

} 
  