import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentPipePipe } from './pipes/content-pipe/content-pipe.pipe';
import {FormsModule} from "@angular/forms";
import { HoverStyleDirective } from './directives/hover-style/hover-style.directive';
import { MessagesComponent } from './components/messages/messages.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data/in-memory-data.service";
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { AddContentDialogComponent } from './components/add-content-dialog/add-content-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentPipePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
    AddContentDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddContentDialogComponent]
})
export class AppModule { }
