import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { LicenseService } from './article.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  providers: [
    LicenseService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
