import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CasesComponent } from './pages/cases/cases.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

AboutComponent
const routes: Routes = [
{ path: '', redirectTo: '/Home', pathMatch: 'full' },  
{ path:  'Home', component:  HomeComponent},
{ path:  'About', component: AboutComponent},
{ path:  'Gallery', component:  GalleryComponent},
{path: 'heros', component: CasesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
