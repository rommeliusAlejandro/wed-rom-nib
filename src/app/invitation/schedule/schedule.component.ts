import { Component, OnInit } from '@angular/core';
import {ScheduleItemType} from '../types/schedule-item.type';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule: ScheduleItemType[] = [
    {time: '13:00', text: 'Ceremonia Civil.'},
    {time: '15:45', text: 'Inicio de la transmisión por Zoom'},
    {time: '16:00', text: 'Entrada de los Novios y acompañamiento.'},
    {time: '16:05', text: 'Consejo Biblico.'},
    {time: '17:00', text: 'Sesion de fotos con los invitados.'},
    {time: '18:00', text: 'Vals y primer baile de esposos.'},
    {time: '18:30', text: 'Palabras de bienvenida, oracion y fin de Transmision por Zoom.'},
    {time: '18:45', text: 'Cena.'},
    {time: '19:30', text: 'Que inicie al fiesta!.'},
    {time: '23:00', text: 'Fin de la fiesta.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
