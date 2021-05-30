import { Component, OnInit } from '@angular/core';
import { GdevMainService } from 'src/app/gdev-panel/gdev-main.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  logoImage: string = ''
  siteInfo: any
  constructor(
    private _main: GdevMainService
  ) {
    this._main.getBrandInfo().subscribe(info => {
      if (info) this.logoImage = info.squareLogo.url
    })
    this._main.getStoreData().then(info => {
      this.siteInfo = info
    })
   }

  ngOnInit(): void {
  }

}
