import { Component, OnInit } from '@angular/core';
import {FireServiceService} from '../fire-service.service'

@Component({
  selector: 'app-persecmap',
  templateUrl: './persecmap.component.html',
  styleUrls: ['./persecmap.component.css']
})
export class PersecmapComponent implements OnInit {
  title = 'Location on Map';
  lat = 20.0057155;
  lng = 64.3864263;
  previous;

  locations:Location[];


  constructor( private fire :FireServiceService) { }

  
  ngOnInit(): void {
    this.getLocationList();
    

  }
  getLocationList() {
    this.fire.getLocations().subscribe(data => {
      this.locations = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data()) as Location
        } as Location;

  });

});
}

clickedMarker(infowindow) {
  if (this.previous) {
    this.previous.close();
  }
  this.previous = infowindow;
}

}
