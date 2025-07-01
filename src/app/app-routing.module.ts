// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/ocorrencias',
        pathMatch: 'full'
      },
      {
        path: 'ocorrencias',
        loadComponent: () => import('./demo/ocorrencias/ocorrencias')
      },
      {
        path: 'ocorrencia-form',
        loadComponent: () => import('./demo/ocorrencias/ocorrencia-form/ocorrencia-form')
      },

      {
        path: 'veiculos',
        loadComponent: () => import('./demo/veiculos/veiculos')
      },
      {
        path: 'veiculo-form',
        loadComponent: () => import('./demo/veiculos/veiculo-form/veiculo-form')
      },

      {
        path: 'funcionarios',
        loadComponent: () => import('./demo/funcionarios/funcionarios')
      },
      {
        path: 'funcionario-form',
        loadComponent: () => import('./demo/funcionarios/funcionario-form/funcionario-form')
      }

      /*{
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }*/
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/pages/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/pages/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
