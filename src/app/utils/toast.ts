/**
 * Created by jeanbaptiste.ledig on 04/12/2018.
 */

import {ToastController} from "ionic-angular";

export const showToast = (toastCtrl: ToastController, message: string): void => {
    let toast = toastCtrl.create({
        message,
        duration: 3000,
        position: 'top'
    });

    toast.present();
};