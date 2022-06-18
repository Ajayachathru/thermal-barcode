import { Component, OnInit } from '@angular/core';
import { ThermalApiService } from './thermal-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Thermal Image Converter';

  barCodeImageBlobResponse: string;
  barCodeGenerationInProgress = false;

  constructor(private thermalApiService: ThermalApiService) {}

  ngOnInit() {
    this.convertThermalLabelToPrinterFormat();
  }

  private convertThermalLabelToPrinterFormat() {
    this.barCodeGenerationInProgress = true;
    this.barCodeImageBlobResponse = '';
    this.thermalApiService.convertThermalLabelToPrinterFormat().subscribe({
      next: (res) => {
        setTimeout(() => {
          this.barCodeImageBlobResponse = res;
          this.barCodeGenerationInProgress = false;
        }, 2500);
      },
      error: (err) => {
        this.barCodeGenerationInProgress = false;
        console.error('Something went wrong, : ' + err);
      },
    });
  }
}
