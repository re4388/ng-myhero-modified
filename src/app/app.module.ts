import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ShowipComponent } from './showip/showip.component';
import { Test1Component } from './test1/test1.component';
import { InputTestComponent } from './input-test/input-test.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { HighlightDirective } from './highlight.directive';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { UnlessDirective } from './unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FetchJsonPipePipe } from './fetch-json-pipe.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ShowipComponent,
    Test1Component,
    InputTestComponent,
    AttrDirectiveComponent,
    HighlightDirective,
    StructuralDirectiveComponent,
    UnlessDirective,
    PipeDemoComponent,
    ExponentialStrengthPipe,
    FetchJsonPipePipe,
    LifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
