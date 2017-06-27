/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth-provider';
import { UserProvider } from '../../providers/user/user-provider';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MessageComponent } from '../../components/message/message';
import * as firebase from 'firebase';

@Injectable()
export class MessageProvider {

  public messageList: FirebaseListObservable<any>;
  public messageDetail: FirebaseObjectObservable<any>;
  public userId: string;
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor(public afDatabase: AngularFireDatabase,
              public authProvider: AuthProvider,
              public userProvider: UserProvider,
              public afAuth: AngularFireAuth,
              public message: MessageComponent)
{
      this.afAuth.authState.subscribe( user => {
        this.userId = user.uid;
        this.messageList = this.afDatabase.list(`/messages/${user.uid}/messageList`);
  });

  console.log('Hello MessageProvider Provider');
  }

  sendMessageToFirebase(message){
  this.messages.push(message);
  }




    getMessageList(): FirebaseListObservable<any> {
    return this.messageList;
  }

  getMessage(messageId: string): FirebaseObjectObservable<any> {
    return this.messageDetail = this.afDatabase
      .object(`/userProfile/${this.userId}/messageList/${messageId}`);
  }

  createMessage(name: string, amount: number, dueDate: string = null,
             paid: boolean = false):firebase.Promise<any>{
    return this.messageList.push({ name, amount, dueDate, paid });
  }

  removeMessage(messageId: string): firebase.Promise<any> {
    return this.messageList.remove(messageId);
  }


  takeMessagePhoto(messageId: string, imageURL: string): any {
    const storageRef = firebase.storage().ref(this.userId);
    return storageRef.child(messageId).child('messagePicture')
      .putString(imageURL, 'base64', {contentType: 'image/png'})
      .then( pictureSnapshot => {
        this.messageList.update(messageId, { picture: pictureSnapshot.downloadURL });
      });
  }




}
