import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatosContactoModel } from 'src/app/gdev-panel/contacto/contacto.model';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  storeDatos: DatosContactoModel

  constructor(
    private fs: AngularFirestore,
  ) {

   }

  async ngOnInit() {
    this.storeDatos = await (await this.fs.collection('_admin').ref.doc('datos_contacto').get()).data() as DatosContactoModel

  }

}
