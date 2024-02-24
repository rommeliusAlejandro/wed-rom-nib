import { Injectable } from '@angular/core';
import {ConfirmationFormType} from '../types/confirmation-form-type';

@Injectable({
  providedIn: 'root'
})
export class WhatsappSenderService {

  constructor() { }

  public sendMessage(type: ConfirmationFormType): void {
    const messagePositive = `https://wa.me/75944185/?text=Hola! muchas gracias por la invitación. Mi nombre es *${type.fullName}* y mi número es *${type.phoneNumber}* y *Si* asistiré a la boda.`;
    const messageNegative = `https://wa.me/75944185/?text=Hola! muchas gracias por la invitación. Mi nombre es *${type.fullName}* y  *No* asistiré a la boda.`;

    let url = messagePositive;
    if (!type.confirm) {
      url = messageNegative;
    }

    window.open(url, "_blank");
  }
}
