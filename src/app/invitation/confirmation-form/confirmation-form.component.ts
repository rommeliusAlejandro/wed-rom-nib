import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WhatsappSenderService} from '../services/whatsapp-sender.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent implements OnInit, AfterViewInit {

  @ViewChild('confirmFormContainer') elementRef: ElementRef;

  confirm: string = "";
  fullName: string = "";
  phoneNumber: string = "";
  invitees: number = 0;

  alertHidden: boolean = true;

  showFormAlert: boolean = false;

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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.alertHidden = false;
        observer.disconnect();
      }
    });

    observer.observe(this.elementRef.nativeElement);

  }


  ngOnInit(): void {
  }

  checkRadioButton(option: string): void {
    this.confirm = option;
    this.showFormAlert = false;
  }

  confirmPresence(): void {

    if(this.confirm === ""){
      this.showFormAlert = true;
      return;
    }

    this.whatsappSenderService.sendMessage({
      confirm: this.confirm,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber
    });
  }

  public hideAlert(): void {
    this.alertHidden = true;
  }

  public showAlert(): void {
    this.alertHidden = false;
  }

}
