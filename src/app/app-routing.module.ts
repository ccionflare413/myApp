import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BamComponent} from './bam/bam.component'

const routes: Routes = [
  {path:'bam',component:BamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BamComponent]; 
