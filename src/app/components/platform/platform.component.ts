import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {

    var markers = [
      { lat: 48.5422, lng: 28.1147, toolTip: 'Перший проект' },
      { lat: 49.5446, lng: 34.5338, toolTip: 'Другий проект' },
      { lat: 48.8746, lng: 25.5538, toolTip: 'Третий проект' }
    ];

    // For center
    let mapProp = {
      center: new google.maps.LatLng(50.4546, 30.5238),
      zoom: 5,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
      // mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);
    let infowindow = new google.maps.InfoWindow({ content: "Четвертий проект" });
    infowindow.open(this.map, marker);
    this.setMultipleMarker(markers, this);
  }

  setMultipleMarker(markers, self) {
    markers.forEach(function (marker) {
      (function (marker) {
        let mark = new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng) });
        let infowindow = new google.maps.InfoWindow({ content: marker.toolTip });
        infowindow.open(self.map, mark);
        mark.setMap(self.map);
      })(marker)
    });
  }


}
