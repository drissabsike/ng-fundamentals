import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import {EventsListComponents} from "./events/events-list.components";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponents,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
