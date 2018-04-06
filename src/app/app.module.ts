import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


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
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
