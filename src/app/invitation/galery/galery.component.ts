import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  folderPath = "assets/images/gallery/"
  photoPaths = [
    "DSCF1163.jpg",
    "DSCF1177.jpg",
    "DSCF1257.jpg",
    "DSCF1258.jpg",
    "DSCF1265.jpg",
    "DSCF1268.jpg",
    "DSCF1273.jpg",
    "DSCF1283.jpg",
    "DSCF1473.jpg",
    "DSCF2423.jpg",
    "DSCF2429.jpg",
    "DSCF4864.jpg",
    "DSCF5405.jpg",
    "DSCF5855.jpg",
    "DSCF5922.jpg"
  ];

  selectedImageUrl: string;
  viewerOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openViewer(path: string) {
    this.selectedImageUrl = path;
    this.viewerOpen = true;
  }

  closeViewer() {
    this.viewerOpen = false;
  }

}
