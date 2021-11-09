import {Component, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../content-service/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  public contentList: Content[] = [];
  public message: string = "";

  constructor(private  contentService: ContentService) {

  }

  ngOnInit(): void {
    // this.contentList = this.contentService.getContent();
    this.contentService.getContentObs().subscribe(content => this.contentList = content);
  }


  public printID(id: number) {
    console.log(id)
  }

  checkForType(type: string): void {
    let filter = this.contentList.filter(c => c.type === type);

    if (filter.length > 0) {
      this.message = "Animal Found";
    } else {
      this.message = "No Animal found of that type";
    }
    // console.log("spread operator", ...this.contentList);
    // console.log("just the array", this.contentList);
    this.contentList = [...this.contentList];
  }

}
