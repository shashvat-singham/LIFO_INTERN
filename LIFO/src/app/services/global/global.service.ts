import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isLoading: boolean = false; 
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  showAlert(message: string, header?, buttonArray?){
    this.alertCtrl.create({
      header: (header ? header : 'Authentication Failed'),
      message: message,
      buttons: buttonArray ? buttonArray : ['Okay']
    })
    .then(alertEl => alertEl.present());
  }

  async showToast(msg, color, position, duration = 3000){
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration,
      color: color,
      position: position
    });
    toast.present();
  }

  errorToast(msg?, duration = 4000){
    this.showToast(msg ? msg : 'No Internet Connection','danger','bottom',duration);
  }

  successToast(msg){
    this.showToast(msg,'success','bottom');
  }

  async showLoader(msg?, spinner?){
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: spinner ? spinner : 'bubbles'
    }).then(res => {
      res.present().then(() => {
        if(!this.isLoading){
          res.dismiss().then(() => {
            console.log('Aborting');
          })
        }
      })
    })
    .catch(e => {
      console.log('show loading error: ', e);
    })
  }

  async hideLoader(){
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  async createModal(options){
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    const {data} = await modal.onWillDismiss();
    console.log(data);
    if(data) return data;
  }

  modalDismiss(val?){
    let data: any = val ? val : null;
    console.log('modal dismiss: ', data);
    this.modalCtrl.dismiss(data)
  }

  getIcon(title){
    const name = title.toLowerCase();
    switch(name){
      case 'home': return 'home-outline';
      case 'work': return 'breifcase-outline';
      default: return 'location-outline';
    } 
  }
}
