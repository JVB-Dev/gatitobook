import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((module) => module.HomeModule) // ativando o lazy load, e importando o HomeModule sobre demanda (sendo assim podemos remover de app.module.ts)
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((module) => module.AnimaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
