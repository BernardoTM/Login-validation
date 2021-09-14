import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { TabelaComponent } from './components/tabela/tabela.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
