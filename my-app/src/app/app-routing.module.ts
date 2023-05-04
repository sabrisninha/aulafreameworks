import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HeroComponent } from './components/hero/hero.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { LoginComponent } from './components/login/login.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LogComponent } from './components/log/log.component';
import { CriarUsuarioComponent } from './components/criar-usuario/criar-usuario.component';


const routes: Routes = [

  {
    path:'heros', component: HeroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create', component:CreateUserComponent},
    {path: 'pagina', component:PaginaComponent},
    {path: 'log', component:LogComponent},
    {path: 'criar-usuario', component:CriarUsuarioComponent},
    {path: '', redirectTo: '/login', pathMatch :'full'},
    {path:'**', component: PageNotFoundComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
