import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  listId: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
    console.debug("Going to edit list %s", this.listId);
  }

}
