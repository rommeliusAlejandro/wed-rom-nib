import { Injectable } from '@angular/core';
import {ConfirmationFormType} from '../types/confirmation-form-type';

@Injectable({
  providedIn: 'root'
})
export class WhatsappSenderService {

  constructor() { }

  public sendMessage(type: ConfirmationFormType): void {
    const whatsappUrl = `https://wa.me/+59175944185/?text=`;
    const messagePositive = `Hola! muchas gracias por la invitación. Mi nombre es *${type.fullName}* y mi número es *${type.phoneNumber}* y *Si* asistiré a la boda.`;
    const messageNegative = `Hola! muchas gracias por la invitación. Mi nombre es *${type.fullName}* y *No* asistiré a la boda.`;

    let text = 'failure';

    if(type.confirm === 'Si') {
      text = messagePositive;
    }

    if (type.confirm === 'No') {
      text = messageNegative;
    }

    window.open(whatsappUrl+text, "_blank");
  }
}
