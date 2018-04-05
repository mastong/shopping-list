import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import {Item} from '../item';

import {ListService} from '../list.service';

import { LIST } from '../mock-list';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  list: List;

  constructor(private listService: ListService) { }

  ngOnInit() {
    console.log("in ngOnInit");
    this.getList();
  }

  /**
   * Return the list to display for shopping.
   * TODO Should use a parameter to load the right list
   */
  getList(): void{
    this.list = this.listService.getList();
  }

  /**
   * Update the status of the item in parameter
   * @param item 
   */
  updateStatusItem(item: Item){
      if(item.status == 'to buy'){
          item.status = 'bought';
      }else if (item.status == 'bought'){
          item.status = 'to buy';
      }else{
          console.log('The item %s is in the status %s, so we keep it that way for now', item.name, item.status);
      }
  }  
}
