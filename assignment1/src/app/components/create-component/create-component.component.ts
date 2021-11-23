import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContentService} from "../../services/content-service/content.service";
import {Content} from "../../helper-files/content-interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddContentDialogComponent} from "../add-content-dialog/add-content-dialog.component";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  constructor(private  contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  public openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AddContentDialogComponent, dialogConfig);
  }

  // TODO: Finish Assignment 7
  createContent() {

  }

  save(): void {
    // this.contentService.addContent().subscribe(content => this.content.push(content));
  }

}
