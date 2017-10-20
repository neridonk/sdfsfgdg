import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BifiService } from './services/bifi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [BifiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
