import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCarEvent = new EventEmitter<Content>();

  newCar: Content;

  constructor() {

  }

  ngOnInit(): void {
  }

  addCar(): void {
    this.newCarEvent.emit(this.newCar)
  }

}
