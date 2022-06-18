import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThermalApiService } from './thermal-api.service';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxPrintModule],
  declarations: [AppComponent],
  providers: [ThermalApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
