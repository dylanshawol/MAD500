import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDb";
import {Observable, of} from "rxjs";
import {MessageService} from "../message-service/message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return CONTENT;
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add("Content Retrieved");
    return of(CONTENT);
  }

}
