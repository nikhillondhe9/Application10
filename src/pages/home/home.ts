import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ForexDataProvider} from "../../providers/forex-data/forex-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rates:any;

  constructor(public navCtrl: NavController,
              public forexDataProvider:ForexDataProvider) {

  }

  ngOnInit(){
  this.getForexDataFromTheInternet();

}

getForexDataFromTheInternet(){
  this.forexDataProvider.getRates()
  .then(data => {
    this.rates = data;
    console.log(this.rates);
  });
}

}
