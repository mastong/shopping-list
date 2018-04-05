import { Injectable } from '@angular/core';
import { List } from './list';
import { LIST } from './mock-list';

@Injectable()
export class ListService {

  constructor() { }

  getList() : List{
    return LIST;
  }

  getAllListsNames() : String[]{
    return ["Classic shopping", "Exotic shopping"];
  }
}
