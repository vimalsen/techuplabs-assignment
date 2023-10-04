import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CustomerModalModule } from './modal/customer-modal/customer-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { PinsModalModule } from './modal/pins-modal/pins-modal.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModalModule,
    HttpClientModule,
    PinsModalModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
