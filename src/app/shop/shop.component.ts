import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { List } from '../list';
import {Item} from '../item';
import {ListService} from '../list.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  list: List;

  constructor(private listService: ListService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.list =this.listService.getListById(this.route.snapshot.paramMap.get('id'));
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
