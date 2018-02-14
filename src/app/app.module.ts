import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './/app-routing.module';
import { SubcontentComponent } from './subcontent/subcontent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SubcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
