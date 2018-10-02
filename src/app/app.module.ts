import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditListComponent } from './edit-list/edit-list.component';
import {ListService} from './list.service';
import { ItemModalComponent } from './edit-list/item-modal/item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    EditListComponent,
    ItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ListService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ItemModalComponent]
})
export class AppModule { }
