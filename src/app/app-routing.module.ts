import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'client',
    data: { title: 'Form Client' },
    loadChildren: () => import('./pages/client-page/client-page.module').then(m => m.ClientPageModule)
  },
  {
    path: '',
    redirectTo: '/client',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
