import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { AppUser} from '../models/app-user';

import * as firebase from "firebase";

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUserFirebase(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

   getUserFirebase(uid: string): FirebaseObjectObservable<AppUser> {
     return this.db.object('/users/' + uid);
   }

}
