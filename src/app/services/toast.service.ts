import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor(public toastController: ToastController) { }

  displayToastSuccess(title: string, message: string, textButton: string) {
    this.toastController.create({
      header: title,
      message: message,
      position: 'middle',
      cssClass: 'toast-class-success',
      duration: 10000,
      buttons: [
        // {
        //   side: 'end',
        //   icon: 'person',
        //   handler: () => {
        //     console.log('');
        //   }
        // },
        {
          side: 'end',
          text: textButton,
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }

  displayToastError(title: string, message: string, textButton: string) {
    this.toastController.create({
      header: title,
      message: message,
      position: 'middle',
      cssClass: 'toast-class-error',
      duration: 15000,
      buttons: [
        {
          side: 'end',
          text: textButton,
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }
}
