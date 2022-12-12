import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { MailingListsComponent } from './mailing-lists/mailing-lists.component';
import { ValidationComponent } from './validation/validation.component';
import { IngestionQueuesComponent } from './ingestion-queues/ingestion-queues.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent,
    MailingListsComponent,
    ValidationComponent,
    IngestionQueuesComponent,
    NewsComponent,
    EventsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
