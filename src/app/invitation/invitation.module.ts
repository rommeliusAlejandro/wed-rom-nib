import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { GaleryComponent } from './galery/galery.component';
import { DressingRuleComponent } from './dressing-rule/dressing-rule.component';
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';
import { WhereWhenComponent } from './where-when/where-when.component';
import { CounterComponent } from './counter/counter.component';
import { BildboardComponent } from './bildboard/bildboard.component';
import { MainComponent } from './main/main.component';
import { LoadingComponent } from './loading/loading.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    FooterComponent,
    GaleryComponent,
    DressingRuleComponent,
    ConfirmationFormComponent,
    WhereWhenComponent,
    CounterComponent,
    BildboardComponent,
    MainComponent,
    LoadingComponent,
    MapComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvitationModule { }
