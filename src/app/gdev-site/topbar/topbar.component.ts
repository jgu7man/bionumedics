import { Component, OnInit } from '@angular/core';
import { MxResponsive } from '@marxa/devkit';
import { GdevMainService } from 'src/app/gdev-panel/gdev-main.service';

@Component({
  selector: 'app-site-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class SiteTopbarComponent implements OnInit {

  logoImage: string
  constructor(
    private _main: GdevMainService,
    public responsive: MxResponsive
  ) {
    this._main.getBrandInfo().subscribe(info => {
      if (info) this.logoImage = info.headLogo.url
    })
   }

  ngOnInit(): void {
  }

  get larger() {
    return this.responsive.large || this.responsive.xLarge
  }

}
