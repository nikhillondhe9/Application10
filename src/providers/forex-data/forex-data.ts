import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ForexDataProvider {
  dataUrl = "https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDEUR,AUDUSD,USDAUD,CADUSD,USDCAD,NZDUSD,USDNZD,GBPUSD,USDGBP&api_key=Your_API_KEY"

  constructor(public http: HttpClient) {
    console.log('Hello ForexDataProvider Provider');
  }

  getRates(){
  return new Promise(resolve => {
    this.http.get(this.dataUrl).subscribe(data => {
      resolve(data);
    },error =>{
      console.log("Bad request", error);
    });
  });

}

}
