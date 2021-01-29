import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  gifsList = new BehaviorSubject<[]>(null);
  
  constructor(private gifService:GifService) { }
   
  ngOnInit(): void {

  }

  search(word:string){
    this.gifService.search(word);
  }
}
