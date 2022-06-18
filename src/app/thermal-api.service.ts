import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ThermalApiService {
  constructor(private http: HttpClient) {}

  /**
   * https://www.neodynamic.com/products/printing/thermal-label/docker/#operation/getThermalLabelPage:~:text=Converts%20a%20ThermalLabel%20template%20to%20Printer%20Commands%2C%20Images%2C%20and%20Documents%20formats.
   */
  public convertThermalLabelToPrinterFormat(): Observable<any> {
    return this.http.post('http://localhost:3000/v1/thermal/convert', {});
  }
}
