import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BellIconComponent } from './icons/bell-icon.component';
import { BookmarkIconComponent } from './icons/bookmark-icon.component';
import { CalculatorIconComponent } from './icons/calculator-icon.component copy';
import { CalendarIconComponent } from './icons/calendar-icon.component';
import { CloudIconComponent } from './icons/cloud-icon.component';
import { CubeIconComponent } from './icons/cube-icon.component';
import { DocumentIconComponent } from './icons/document-icon.component';
import { GiftIconComponent } from './icons/gift-icon.component';
import { InboxIconComponent } from './icons/inbox-icon.component';
import { KeyIconComponent } from './icons/key-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    BellIconComponent,
    BookmarkIconComponent,
    CalculatorIconComponent,
    CalendarIconComponent,
    CloudIconComponent,
    CubeIconComponent,
    DocumentIconComponent,
    GiftIconComponent,
    KeyIconComponent,
    InboxIconComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
