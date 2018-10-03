import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {ListService} from '../list.service';
import { ListHeader } from '../shared/models/list-header';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listHeaders: ListHeader[] = [];
  selectedListId: String;

  constructor(private listService: ListService, private router: Router) { }


  /**
   * If a list is selected, navigate to the edit view for this list.
   * Else display a warning in the console.
   */
  navigateToEdit(){
    this.navigate("/edit/");
  }

  /**
   * If a list is selected, navigate to the shop view for this list.
   * Else display a warning in the console.
   */
  navigateToShop(){
    this.navigate("/shop/");
  }

  private navigate(uri: String){
    if(! this.selectedListId){
      console.warn("No list selected yet!")
      return;
    }
    this.router.navigate([uri, this.selectedListId]).then(nav => {
      console.log(nav);
    }).catch(err => {
      console.error(err);
    });
  }

  ngOnInit() {
    this.listService.getAllListHeader().subscribe((listHeaders: ListHeader[]) => {
      this.listHeaders = listHeaders;
    });
  }

}
