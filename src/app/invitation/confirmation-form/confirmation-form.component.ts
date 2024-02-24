import {Component, OnInit} from '@angular/core';
import {WhatsappSenderService} from '../services/whatsapp-sender.service';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent implements OnInit {

  confirm: string = "";
  fullName: string = "";
  phoneNumber: string = "";

  constructor(
    private readonly whatsappSenderService: WhatsappSenderService
  ) {
  }

  ngOnInit(): void {
  }

  confirmPresence(): void {
    this.whatsappSenderService.sendMessage({
      confirm: this.confirm,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber
    });
  }

}
