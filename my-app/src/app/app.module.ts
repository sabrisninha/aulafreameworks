import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { LogComponent } from './components/log/log.component';
import { CriarUsuarioComponent } from './components/criar-usuario/criar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskComponent } from './components/task/task.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { MembrosComponent } from './components/membros/membros.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    PageNotFoundComponent,
    CreateUserComponent,
    PaginaComponent,
    LogComponent,
    CriarUsuarioComponent,
    DashboardComponent,
    TaskComponent,
    TodolistComponent,
    EquipeComponent,
    MembrosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
