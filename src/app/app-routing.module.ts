import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Test1Component } from './test1/test1.component';
import { InputTestComponent } from './input-test/input-test.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';


const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'test1', component: Test1Component },
  { path: 'inputtest', component: InputTestComponent },
  { path: 'attr-directive', component: AttrDirectiveComponent },
  { path: 'structural-directive', component: StructuralDirectiveComponent },
  { path: 'pipe-demo', component: PipeDemoComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
