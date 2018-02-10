import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDataService } from '../client-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
  

export class HomeComponent implements OnInit {

  constructor(private router:Router, private clientData: ClientDataService ) { }

  ngOnInit() {  }

  logo:any = "../assets/logoN.png"
  cardapio:any = "../assets/cardapio.png"

  submit(){
    this.router.navigate(['balcao'])
  }

}
