import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContentService} from "../../services/content-service/content.service";
import {Content} from "../../helper-files/content-interface";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  constructor(private  contentService: ContentService) { }

  ngOnInit(): void {
  }

  createContent() {

  }

  save(): void {
    // this.contentService.addContent().subscribe(content => this.content.push(content));
  }

}
