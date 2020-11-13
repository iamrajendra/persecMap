import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FireServiceService} from '../fire-service.service'

@Component({
  selector: 'app-persec-list',
  templateUrl: './persec-list.component.html',
  styleUrls: ['./persec-list.component.css']
})
export class PersecListComponent implements OnInit {
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


}