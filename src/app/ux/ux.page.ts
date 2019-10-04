import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-ux',
  templateUrl: 'ux.page.html',
  styleUrls: ['ux.page.scss']
})
export class UxPage {

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 2000,
    loop: true,
    autoplay: true
  };

  constructor() { }

}
