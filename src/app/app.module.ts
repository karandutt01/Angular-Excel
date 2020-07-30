import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './service/TokenInterceptor.service'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
	DashboardComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
  ],
  providers: [
	{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
