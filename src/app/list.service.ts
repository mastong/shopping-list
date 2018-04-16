import { Injectable } from '@angular/core';
import { List } from './list';
import { Item } from './item';

@Injectable()
export class ListService {

  mockCatalog: List[] = [
    {
      id:"1",
      name:"Classic shopping list",
      items : [
          {name:"San Pelegrino", picture:"sanpelegrino.jpeg", qty:1, status:"to buy"},
          {name:"Purée de brocolis", picture:"pureedebrocolis.jpeg", qty:2, status:"bought"},
          {name:"Rumsteak", picture:"rumsteak.jpeg", qty:3, status:"unavailable"},
          {name:"Salade", picture:"salade.jpeg", qty:1, status:"to buy"}
      ]
    },
    {
      id:"2",
      name:"Exotic shopping list",
      items : [
          {name:"Vélo", picture:"vélo.jpeg", qty:1, status:"to buy"}
      ]
    }
  ];

  constructor() { }

  /**
   * Return the first list found in the catalog with the given name
   * @param name 
   */
  getListByName(name: String) : List{
    return this.mockCatalog.find(list =>{
      return list.name === name;
    });
  }

  /**
   * Return the name of all the lists in the catalog
   */
  getAllListsNames() : String[]{
    return this.mockCatalog.map(list =>{
      return list.name;
    })
  }

  /**
   * Return the first list found in the catalog with the given id
   * @param id 
   */
  getListById(id: String) : List{
    return this.mockCatalog.find(list =>{
      return list.id === id;
    });
  }

  removeItemFromList(list: List, toRemove: Item){
    list.items = list.items.filter(item => item.name != toRemove.name);
  }
}
