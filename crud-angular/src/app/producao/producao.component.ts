import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../client-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producao',
  templateUrl: './producao.component.html',
  styleUrls: ['./producao.component.css']
})
export class ProducaoComponent implements OnInit {

  constructor(private router: Router, private clientData: ClientDataService ) { }

  ngOnInit() {
  }

  picon:any = "../assets/prod-icon.png"

  submit(){
    this.router.navigate(['estoque']);
  }

}
   