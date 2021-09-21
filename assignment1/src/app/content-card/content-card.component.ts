import {Component, Input, OnInit} from '@angular/core';
import { Content} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {

  @Input() content: Content | undefined;
  constructor() {
  }

  ngOnInit(): void {
    this.content = {
      id: 1,
      imgUrl: "",
      body: "Content Body",
      type: "Content Type"
    }
  }

}
