import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.scss']
})
export class ConfirmationFormComponent implements OnInit {

  confirm: boolean;
  fullName: string;
  phoneNumber: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  confirmPresence(): void{
  }

}
