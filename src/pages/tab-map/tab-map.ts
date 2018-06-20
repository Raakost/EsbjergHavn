import { IonicPage, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLngBounds,
  LatLng,
  MarkerOptions,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';

import { Platform, NavController } from 'ionic-angular';
import {TabsMapPageModel} from "../../models/TabsMapPageModel";


@IonicPage()
@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html',
})
export class TabMapPage {
  map: TabsMapPageModel;

  @ViewChild('map') element;
  constructor( public navParams: NavParams, public googleMaps: GoogleMaps, public plt: Platform, public nav: NavController) {
    this.map = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMapPage');
  }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {


      let coordinates: Array<LatLng> = this.map.Markers.map(item =>
        new LatLng(parseFloat(item.Latitude), parseFloat(item.Longitude)));
      let bounds = new LatLngBounds(coordinates);

      var mapElement = this.element;
      var mapDimensions = {
        height: mapElement.offsetHeight,
        width: mapElement.offsetWidth
      };

      let initialPosition = {
        target: new LatLng(56.222017, 9.212361),
        zoom: 17
      };
      map.moveCamera(initialPosition);

      let boundsPosition = {
        target: bounds,
        tilt: 0,
        duration: 100
      };
      map.animateCamera(boundsPosition).then(() => map.setCameraZoom(map.getCameraZoom() - 1));


      for(let marker of this.map.Markers) {
        let markerOptions: MarkerOptions = {
          position: new LatLng(parseFloat(marker.Latitude), parseFloat(marker.Longitude)),
          icon: "assets/images/icons8-Marker-64.png"
        };

        const infoWindow = new HtmlInfoWindow();
        infoWindow.setContent(`<div style="width:250px;">
<p><strong>${marker.Title}</strong></p> 
<p style="width: 300px;"><img src="${marker.Img}" style="float:left; vertical-align: text-top; width:70px;">${marker.Text}</p></div>`);

        map.addMarker(markerOptions).then((mapMarker: Marker) => {
          const observable = mapMarker.on(GoogleMapsEvent.MARKER_CLICK);
          observable.subscribe(() => {
            infoWindow.open(mapMarker);
          });
        });
      }
/*
      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "assets/images/icons8-Marker-64.png",
        title: 'Our first POI'
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
        });*/
    })
  }
}
