import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ListService} from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listsName: String[];
  selectedListName: String;

  constructor(private listService: ListService, private router: Router) { }


  /**
   * If a list is selected, navigate to the shop view for this list.
   * Else display a warning in the console.
   */
  navigateToShop(){
    if(! this.selectedListName){
      console.warn("No list selected yet!")
      return;
    }

    let id = this.listService.getListByName(this.selectedListName).id

    this.router.navigateByUrl("/shop/"+id).then(nav => {
      console.log(nav);
    }).catch(err => {
      console.error(err);
    });
  }

  ngOnInit() {
    this.listsName = this.listService.getAllListsNames();
  }

}
