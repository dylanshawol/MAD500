import {Component} from '@angular/core';
import {ContentService} from "./services/content-service/content.service";
import {LogUpdateService} from "./services/log-update-service/log-update.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'assignment1'

  constructor(private contentService: ContentService, private logService: LogUpdateService) {
  }
}



