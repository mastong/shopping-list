import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listsName: String[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listsName = this.listService.getAllListsNames();
  }

}
