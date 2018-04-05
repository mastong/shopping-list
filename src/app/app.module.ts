import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditListComponent } from './edit-list/edit-list.component';
import {ListService} from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
