import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LaningPageComponent } from './laning-page/laning-page.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [


  //
  {path:'',redirectTo:'landing', pathMatch: 'full' },
  { path: 'landing', component:LaningPageComponent},
   { path: 'about', component:AboutComponent},
   { path: 'contact', component: ContactComponent },
   { path: 'services', component: ServicesComponent},
   { path: 'team', component: TeamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
