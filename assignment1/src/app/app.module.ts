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

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentPipePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
