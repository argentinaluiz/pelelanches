import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balcao',
  templateUrl: './balcao.component.html',
  styleUrls: ['./balcao.component.css']
})
export class BalcaoComponent implements OnInit {

  constructor( private router: Router, private clientData: ClientDataService ) { }

  ngOnInit() {
  }
 
  bicon:any = "../assets/b-icon.png"
  logo:any = "../assets/logoN.png"

  submit(){
    this.router.navigate(['garcom'])
  }

  selected = 'choose';
   
}
 