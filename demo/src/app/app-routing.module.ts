import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "app/home/home.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'input', loadChildren: './components/input/inputdemo.module#InputDemoModule'},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
