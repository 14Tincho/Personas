import { Component, OnChanges } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-galeria-de-imagenes',
  templateUrl: './galeria-de-imagenes.component.html',
  styleUrls: ['./galeria-de-imagenes.component.css']
})
export class GaleriaDeImagenesComponent implements OnChanges {
  images: any[];
  filterBy: string = 'all';
  allImages: any[] = [];
  constructor(private imageService: ImagesService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges(): void {
    this.allImages = this.imageService.getImages();
  }
}
