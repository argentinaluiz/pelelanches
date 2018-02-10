import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

  
@Injectable()
export class ClientDataService {   
  
  constructor(private http : Http) { }
     
     getPeleItems(){
       return this.http.get('http://localhost:3000/api/items')
       .map(res => res.json());
     }

     addPeleItem(newItem){
       let headers = new Headers();
       headers.append('Content-type', 'aplication/json');
       return this.http.post('http://localhost:3000/api/item', newItem, { headers : headers})
       .map(res => res.json());
     }

       

}
 
 

 