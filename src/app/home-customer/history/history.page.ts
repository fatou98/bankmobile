import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  month
  viewlist=false
  constructor(
    public alertController: AlertController,

  ) { }

  ngOnInit() {
  }
async select(){
if (this.month) {
  this.viewlist=true;
}else{
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Erreur',
    subHeader: 'Erreur',
    message: 'Veuillez selectionner le mois.',
    buttons: ['OK']
  });
  await alert.present();
}
}
}
