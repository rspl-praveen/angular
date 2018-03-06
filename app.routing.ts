import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContentComponent} from './content/content.component';
import {SubcontentComponent} from './subcontent/subcontent.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      { path: 'contents', component: ContentComponent },
      { path: 'subcontent/:id', component: SubcontentComponent },
      { path: 'user', component: UserComponent },
      { path: 'about', component: AboutComponent }

    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
