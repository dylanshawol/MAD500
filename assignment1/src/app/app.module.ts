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
import { ContentDetailComponent } from './components/content-detail/content-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ContentDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, delay: 1000 }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentDetailComponent },
      { path: '**', component: NotFoundComponent }

    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddContentDialogComponent]
})
export class AppModule { }
