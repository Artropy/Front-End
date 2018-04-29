import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImagePageComponent implements OnInit {

  assetID: number;
  artistName: string;
  assetName: string;
  likes: number;
  views: number;
  tags: string[];

  ngOnInit() {

  }


  //GET MAIN IMAGE.
  getAssetInformation = function (artistName: String, imageName: String){

  }

  //GET RELATED IMAGES.
  getRelatedAssets = function (tags: string[]){

  }

  //GET TAGS.
  getAssetTags = function (assetID: number){

  }

  //GET IMAGE STATS.
  getAssetStats = function (){

  }

  //LIKE IMAGE.
  likeAsset = function (liked: boolean){

  }

  //ADD TO CART
  addToCart = function (){

  }

  //DOWNLOAD IMAGE.
  downloadAsset = function (){

  }

  updateImageViewedCount = function (){

  }

}
