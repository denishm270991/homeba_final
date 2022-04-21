import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { UserI } from '../interfaces/user';
import { User } from '../shared/user.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  user$: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private storage: StorageService,
  ) {
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap((user) => {
    //     if (user) {
    //       this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     }
    //     return of(null);
    //   })
    // );
  }

  async resetPaswword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error) {
      console.log('Error-->', error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    }
    catch (error) {
      console.log('Error-->', error);
    }
  }

  // async login(email: string, password: string): Promise<User> {
  //   try {
  //     const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
  //     this.updateUserData(user);
  //     return user;
  //   }
  //   catch (error) {
  //     console.log('Error-->', error);
  //   }
  // }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    }
    catch (error) {
      console.log('Error-->', error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

  async logout(): Promise<void> {
    try {
      this.afAuth.signOut();
    }
    catch (error) {
      console.log('Error-->', error);
    }
  }

  findUser(uid: string) {
    const user2Ref = this.afs.collection('/users2/');
    user2Ref.ref.get().then(data => {
      let dataUser: any;
      data.forEach((doc) => {
        dataUser = doc.data();
        if (dataUser.uid.includes(uid)) {
          var uidNormalice = dataUser.uid.replace("'\'");
          uidNormalice = uidNormalice.replace("'");
          const data = {
            uid: uidNormalice,
            email: dataUser.email,
            verifyEmail: true,
            fullName: dataUser.fullName,
            mobileNumber: dataUser.mobileNumber
          };
          this.storage.setObject('hbaUid', uidNormalice);
          this.storage.setObject('hbaUser', JSON.stringify(data));
        }
      });
    })
  }

  existUser(uid: string): boolean {
    const user2Ref = this.afs.collection('/users2/');
    user2Ref.ref.get().then(data => {
      let dataUser: any;
      data.forEach((doc) => {
        dataUser = doc.data();
        if (dataUser.uid.includes(uid)) {
          return true;
        }
      });
    })
    return false;
  }

  addUser(user: UserI) {
    // const userRef: AngularFirestoreDocument<UserI> = this.afs.doc(`/users/`);
    // const userRef = this.afs.doc(`/users/${user.uid}`);
    if (!this.existUser(user.uid)) {
      const collection = this.afs.collection('/users2/');
      const data = {
        uid: user.uid,
        email: user.email,
        verifyEmail: true,
        fullName: user.fullName,
        mobileNumber: user.mobileNumber
      };
      collection.add(data).then(res => {
        this.storage.setString('hbaUid', res.id);
      });
    }
  }

  // async loginGoogle(): Promise<User> {
  //   try {
  //     const {user} = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //     this.updateUserData(user);
  //     return user;
  //   }
  //   catch(error){
  //     console.log('Error-->', error);
  //   }
  //  }
}
