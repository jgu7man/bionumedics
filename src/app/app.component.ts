import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { GdevMainService } from './gdev-panel/gdev-main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bionumedics';
  constructor(
    @Inject(DOCUMENT) private doc,
    private _admin: GdevMainService,
  ) {
    this._admin.getBrandInfo().subscribe(info => {
      if (info && info.iconLogo) {
        let link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'icon');
        link.setAttribute('type', 'image/x-icon');
        link.setAttribute('href', info.iconLogo.url);
        this.doc.head.appendChild(link);
      }
    })
   }


}
