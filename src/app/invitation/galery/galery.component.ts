import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit, AfterViewInit {

  folderPath = "assets/images/gallery/"
  photoPaths = [
    "DSCF1063.jpg",
    "DSCF1131.jpg",
    "DSCF1160.jpg",
    "DSCF1163.jpg",
    "DSCF1177.jpg",
    "DSCF1236.jpg",
    "DSCF1258.jpg",
    "DSCF1268.jpg",
    "DSCF1273.jpg",
    "DSCF1358.jpg",
    "DSCF1473.jpg",
    "DSCF1538.jpg",
    "DSCF1704.jpg",
    "DSCF1937.jpg",
    "DSCF2107.jpg",
    "DSCF2289.jpg",
    "DSCF2377.jpg",
    "DSCF2429.jpg",
    "DSCF4806.jpg",
    "DSCF5167.jpg",
    "DSCF5342.jpg",
    "DSCF5405.jpg",
    "IMG-20231218-WA0059.jpg",
    "IMG_20230723_103041.jpg",
    "IMG_20230723_103359.jpg",
    "IMG_20230723_104758.jpg",
    "IMG_20230723_105205.jpg",
    "IMG_20230723_110344.jpg",
    "IMG_20230723_110518.jpg",
    "IMG_20230723_112024.jpg",
    "IMG_20230723_113215.jpg",
    "IMG_20230723_113411.jpg",
    "IMG_20230723_114552.jpg",
    "IMG_20230723_114657.jpg",
    "IMG_20230723_121127.jpg",
    "IMG_20230723_122715.jpg",
    "IMG_20231014_165850.jpg"
  ];

  selectedImageUrl: string;
  viewerOpen: boolean = false;

  constructor() {
  }

  ngAfterViewInit(): void {
    const imageContainer = document.getElementById('photoFrameContainer');
    const images = Array.from(imageContainer.querySelectorAll('img'));
    images.sort((a, b) => {
      return a.height - b.height; // Sort images by height
    });
    images.forEach(img => imageContainer.appendChild(img));

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
