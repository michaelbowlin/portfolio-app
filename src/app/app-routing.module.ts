import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'portfolio/ux', loadChildren: './tabs/tabs.module#TabsPageModule'},
  // { path: 'portfolio/case-study', loadChildren: './tabs/tabs.module#TabsPageModule'},

  // { path: 'portfolio', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



