import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path: 'layout', component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
