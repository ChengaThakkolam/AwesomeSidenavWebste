import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings/settings.component';
import { MediaComponent } from './media/media/media.component';
import { PagesComponent } from './pages/pages/pages.component';
import { StaticsComponent } from './statistics/statics/statics.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashbordComponent},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {path: 'statistics', component: StaticsComponent},
  {
    path: 'coupens',
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
