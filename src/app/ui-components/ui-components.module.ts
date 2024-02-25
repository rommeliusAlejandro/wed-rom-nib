import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';



@NgModule({
  declarations: [
    ScheduleItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScheduleItemComponent
  ]
})
export class UiComponentsModule { }
