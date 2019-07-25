import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidenciaListComponent } from "./components/incidencia-list/incidencia-list.component";
import { IncidenciaFormComponent } from "./components/incidencia-form/incidencia-form.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards.guard';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,  canActivate: [AuthGuard] 
  },
  {
    path:'incidencia',
    component:IncidenciaListComponent, canActivate: [AuthGuard] 
  },
  {
    path:'incidencia/create',
    component: IncidenciaFormComponent, canActivate: [AuthGuard] 
  },
  {
    path:'incidencia/detalle/:id',
    component: IncidenciaListComponent, canActivate: [AuthGuard] 
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    path:'home',
    component: HomeComponent, canActivate: [AuthGuard] 

  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
