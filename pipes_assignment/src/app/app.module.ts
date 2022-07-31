import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipePipe } from './sort-pipe.pipe';
import { ReversePipePipe } from './reverse-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipePipe,
    ReversePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
