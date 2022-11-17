import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  DBButtonModule,
  DBIconModule,
  DBTabBarModule
} from '../../../../packages/core/output/angular/src';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DBButtonModule, DBIconModule, DBTabBarModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
