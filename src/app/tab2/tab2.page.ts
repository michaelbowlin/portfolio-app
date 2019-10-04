import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    loop: true,
    autoplay: true
  };

  constructor() {}

}
