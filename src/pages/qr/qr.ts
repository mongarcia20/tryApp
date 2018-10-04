import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {
options: BarcodeScannerOptions;
encodText:string='';
encodedData:any={};
scannedData:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public scanner: BarcodeScanner) {
  }
  scan(){
  	this.options= {
  		prompt:'Scan your barcode'
  	};
  	this.scanner.scan(this.options).then((data) => {
  		this.scannedData = data;
  	}, (err) => {
  		console.log('Error: ', err)
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

}
