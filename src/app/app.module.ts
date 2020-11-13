import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PersecmapComponent } from './persecmap/persecmap.component';
import { PersecListComponent } from './persec-list/persec-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PersecmapComponent,
    PersecListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
