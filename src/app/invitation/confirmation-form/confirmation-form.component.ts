import {Component, OnInit} from '@angular/core';
import {WhatsappSenderService} from '../services/whatsapp-sender.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent implements OnInit {

  confirm: string = "";
  fullName: string = "Pepito Perez";
  phoneNumber: string = "";
  invitees: number = 0;

  constructor(
    private readonly whatsappSenderService: WhatsappSenderService,
    private readonly route: ActivatedRoute
  ) {
    this.route.queryParamMap
      .subscribe((params) => {
        this.fullName = params['params']['fullName'];
        this.invitees = params['params']['invitees'];
      });
  }

  ngOnInit(): void {
  }

  checkRadioButton(option: string): void {
    this.confirm = option;
  }

  confirmPresence(): void {
    this.whatsappSenderService.sendMessage({
      confirm: this.confirm,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber
    });
  }

}
