import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data.service';
 
@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  constructor(private router: Router, private clientData: ClientDataService) { }

  ngOnInit() { }

  submit(){
     console.log(this.clientData);
  }

  moneyIcon: any = '../assets/money-icon.png';

}
  