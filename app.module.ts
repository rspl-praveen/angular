import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './/app-routing.module';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    SubcontentComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
FormsModule,
HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
