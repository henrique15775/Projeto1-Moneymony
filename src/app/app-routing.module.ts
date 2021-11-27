import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginUsuarioComponent } from './user-workspace/login-usuario/login-usuario.component';
import { ViewCotacaoComponent } from './user-workspace/view-cotacao/view-cotacao.component';

const routes: Routes = [{
  path:'viewcotacao',
  component: ViewCotacaoComponent
},
  {path:'',
  component: ViewCotacaoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
