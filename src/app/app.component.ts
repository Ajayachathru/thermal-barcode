import { Component, OnInit } from '@angular/core';
import { ThermalApiService } from './thermal-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Thermal Image Converter';

  constructor(private thermalApiService: ThermalApiService) {}

  ngOnInit() {
    this.convertThermalLabelToPrinterFormat();
  }

  private convertThermalLabelToPrinterFormat() {
    this.thermalApiService.convertThermalLabelToPrinterFormat('').subscribe(
      (res) => {},
      (err) => {
        console.error('Sorry something went wrong, Please contact admin !');
      }
    );
  }
}
