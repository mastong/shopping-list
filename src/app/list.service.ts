import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { List } from './shared/models/list';
import { Item } from './shared/models/item';
import { Observable } from 'rxjs';
import { ListHeader } from './shared/models/list-header';

@Injectable()
export class ListService {

  private host: String = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  /**
   * Return the first list found in the catalog with the given id
   * @param id
   */
  getListById(id: String): Observable<List>{
    return this.httpClient.get<List>(this.host+'lists/'+id);
  }

  /**
   * Return the "header" for all the list.
   * The header will contain :
   * - The list id
   * - The list name
   */
  getAllListHeader(): Observable<ListHeader[]>{
    // TODO The backend should return only the "header" part of the list (ie id and name), and not all the items.
    // When this is done, we can remove the ListHeader creation part to return directly what we retrieved
    return this.httpClient.get<List[]>(this.host+'lists').pipe(
      map((lists: List[]) => lists.map((list: List) => {
        let listHeader: ListHeader = new ListHeader();
        listHeader.id = list.id;
        listHeader.name = list.name;
        return listHeader;
      }))
    );
  }

  removeItemFromList(list: List, toRemove: Item){
    list.items = list.items.filter(item => item.name != toRemove.name);
  }

  updateList(list: List){
    return this.httpClient.put<List>(this.host+'lists/'+list.id, list);
  }
}
