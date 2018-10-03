import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../shared/models/item';
import { ListService } from '../../list.service';
import { List } from '../../shared/models/list';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {

  @Input() item: Item;
  @Input() list: List;

  constructor(public activeModal: NgbActiveModal, private listService: ListService) { }

  ngOnInit() {
  }

  save(){
    let item: Item = this.list.items.find((item: Item) => item.id === this.item.id);
    // TODO Must be a better way to do this...
    item.name = this.item.name;
    item.picture = this.item.picture;
    item.qty = this.item.qty;
    this.listService.updateList(this.list);
    this.close("success");
  }

  close(result: string){
    this.activeModal.close(result)
  }
}
