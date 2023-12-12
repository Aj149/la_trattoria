

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AmbientesComponent } from './ambientes/ambientes/ambientes/ambientes.component';
import { Menu1Component as Menu1ComponentAmbiente1 } from './ambientes/ambiente1/menu1/menu1.component';
import { Menu2Component as Menu2ComponentAmbiente1 } from './ambientes/ambiente1/menu2/menu2.component';
import { Menu3Component as Menu3ComponentAmbiente1 } from './ambientes/ambiente1/menu3/menu3.component';

import { Menu1Component as Menu1ComponentAmbiente2 } from './ambientes/ambiente2/menu1/menu1.component';
import { Menu2Component as Menu2ComponentAmbiente2 } from './ambientes/ambiente2/menu2/menu2.component';
import { Menu3Component as Menu3ComponentAmbiente2 } from './ambientes/ambiente2/menu3/menu3.component';

import { Menu1Component as Menu1ComponentAmbiente3 } from './ambientes/ambiente3/menu1/menu1.component';
import { Menu2Component as Menu2ComponentAmbiente3 } from './ambientes/ambiente3/menu2/menu2.component';
import { Menu3Component as Menu3ComponentAmbiente3 } from './ambientes/ambiente3/menu3/menu3.component';
import { Ambiente1Component } from './ambientes/ambiente1/ambiente1.component';
import { Ambiente2Component } from './ambientes/ambiente2/ambiente2.component';
import { Ambiente3Component } from './ambientes/ambiente3/ambiente3.component';
import { RegisterComponent } from './auth/register/register.component';
import { DeleteComponent } from './auth/delete/delete.component';
import { UpdateComponent } from './auth/update/update.component';
import { FormularioPagoComponent } from './auth/formulario-pago/formulario-pago.component';



const routes: Routes = [

   { path: 'ambiente1',component:Ambiente1Component, children: [
    { path: 'menu1', component: Menu1ComponentAmbiente1 },
    { path: 'menu2', component: Menu2ComponentAmbiente1 },
    { path: 'menu3', component: Menu3ComponentAmbiente1 },
    { path: 'menu1', component: Menu1ComponentAmbiente1 },
      { path: '', redirectTo: 'menu1', pathMatch: 'full' }
    ]},
   { path: 'ambiente2',component:Ambiente2Component,children: [
    { path: 'menu1', component: Menu1ComponentAmbiente2 },
    { path: 'menu2', component: Menu2ComponentAmbiente2 },
    { path: 'menu3', component: Menu3ComponentAmbiente2 },
    { path: 'menu1', component: Menu1ComponentAmbiente2 },
      { path: '', redirectTo: 'menu1', pathMatch: 'full' }
    ]},




   { path: 'ambiente3',component:Ambiente3Component,children: [
    { path: 'menu1', component: Menu1ComponentAmbiente3 },
    { path: 'menu2', component: Menu2ComponentAmbiente3},
    { path: 'menu3', component: Menu3ComponentAmbiente3 },
    { path: 'menu1', component: Menu1ComponentAmbiente3},
      { path: '', redirectTo: 'menu1', pathMatch: 'full' }
    ]},


  // {
  //   path: 'ambiente2',
  //   children: [

  //     { path: 'menu2', component: Menu2ComponentAmbiente2 },
  //     { path: 'menu3', component: Menu3ComponentAmbiente2 },



  //   ]
  // },
  // {
  //   path: 'ambiente3',
  //   children: [
  //     { path: 'menu1', component: Menu1ComponentAmbiente3 },
  //     { path: 'menu2', component: Menu2ComponentAmbiente3 },
  //     { path: 'menu3', component: Menu3ComponentAmbiente3 },


  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'formulario-pago', component: FormularioPagoComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ambientes', component: AmbientesComponent },
  { path: '', redirectTo: '/ambientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
