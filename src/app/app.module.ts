import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import {GifService} from './services/gif.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
