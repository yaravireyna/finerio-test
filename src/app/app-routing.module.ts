import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeginComponent } from './componets/begin/begin.component';
import { LoginComponent } from './componets/login/login.component';

const routes : Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full'},
  { path: 'begin', component: BeginComponent,  pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}