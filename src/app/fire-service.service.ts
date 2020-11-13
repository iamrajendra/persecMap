import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  constructor(private firestore: AngularFirestore) { }

  getLocations() {
    
    return this.firestore.collection('location_list').snapshotChanges();

  }
}
