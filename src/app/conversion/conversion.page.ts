import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  converted=false
  constructor() { }

  ngOnInit() {
  }
  conversion(){
    this.converted=true
  }

}
