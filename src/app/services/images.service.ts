import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  allImgs = [];

  getImages(){
    return this.allImgs = ImagesDetails.slice(0);
  }
  getImage(id: Number){
    return ImagesDetails.slice(0).find(images => images.id == id)
  }
  constructor() { }
}
const  ImagesDetails = [
    {"id":1, "brand": "hombre", "url": "assets/Images/hombre1.jpg"},
    {"id":2, "brand": "hombre", "url": "assets/Images/hombre2.jpg"},
    {"id":3, "brand": "hombre", "url": "assets/Images/hombre3.jpg"},
    {"id":5, "brand": "mujer", "url": "assets/Images/mujer1.jpg"},
    {"id":6, "brand": "mujer", "url": "assets/Images/mujer2.jpg"},
    {"id":7, "brand": "mujer", "url": "assets/Images/mujer3.jpg"},
    {"id":9, "brand": "nino", "url": "assets/Images/nino1.jpg"},
    {"id":10, "brand": "nino", "url": "assets/Images/nino2.jpg"},
    {"id":11, "brand": "nino", "url": "assets/Images/nino3.jpg"},
    {"id":12, "brand": "nino", "url": "assets/Images/nino4.jpg"},
    {"id":14, "brand": "trans", "url": "assets/Images/trans1.jpg"},
    {"id":15, "brand": "trans", "url": "assets/Images/trans2.jpg"},
    {"id":16, "brand": "trans", "url": "assets/Images/trans3.jpg"}
  ];
