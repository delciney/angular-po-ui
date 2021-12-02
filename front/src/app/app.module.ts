import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { PoAccordionModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoTemplatesModule,
    PoAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
