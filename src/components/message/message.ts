/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Component } from '@angular/core';
import {UserProvider} from '../../providers/user/user-provider';


@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  messageId: string;
  messageText: string;
  messageDate: string;
  mediaType: string;
  author: string;
  messageMediaURL: string;
  roomId: string;
  messageLat: string;
  messageLong: string;
  isRead: boolean;


  constructor() {
    console.log('Hello MessageComponent Component');










  }




}
