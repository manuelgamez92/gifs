import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiKEY: string = environment.apiKEY;
  apiURL : string = environment.apiURL;
  constructor(private http:HttpClient) { 
    
  }
  search(word:string){
    return this.http.get(this.apiURL+'?q='+word.trim()+'&'+'api_key='+this.apiKEY).subscribe( res =>{
      console.log(res);
    });
  }
}
