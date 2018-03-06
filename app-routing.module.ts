import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { SubcontentComponent } from './subcontent/subcontent.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'contents', component: ContentComponent },
  { path: 'subcontent/:id', component: SubcontentComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

