import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email
password
  constructor(
    public alertController: AlertController,
    public router:Router,
  ) { }

  ngOnInit() {
  }

  async verify(){
    console.log(this.email);
      console.log(this.password);
      if(this.email==undefined || this.password==undefined){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Erreur',
          subHeader: 'Erreur',
          message: 'Veuillez saisir votre email ou mdp.',
          buttons: ['OK']
        });
        await alert.present();
      this.router.navigate(['/dashboard'])

      }
     else if(this.email=="" && this.password==""){
      this.router.navigate(['/dashboard'])
      }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Erreur',
        subHeader: 'Erreur',
        message: 'Email ou mot de passe incorrect.',
        buttons: ['OK']
      });
      await alert.present();

    }
  }

}
