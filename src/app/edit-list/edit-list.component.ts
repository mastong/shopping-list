import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { List } from '../shared/models/list';
import {ListService} from '../list.service';
import {ItemModalComponent} from './item-modal/item-modal.component';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  list: List;

  constructor(private listService: ListService, private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {
    this.listService.getListById(this.route.snapshot.paramMap.get('id')).subscribe((list: List) => { this.list = list;});
  }

  removeItem(item){
    this.listService.removeItemFromList(this.list, item);
  }

  editItem(item){
    const modalRef = this.modalService.open(ItemModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.list = this.list;
  }

  addItem(){
    console.log("TODO > Should display a popup to add a new item");
  }
}
