import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDataService } from './client-data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
   
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    FormsModule

     
  ],
  providers: [ ClientDataService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

 