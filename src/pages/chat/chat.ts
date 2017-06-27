/************************************************************************
 * Ionic-3 Firebase-3 Angular-4 Authentication Boilerplate
 * K.Brennan IDEwerks @6/2017
 * idewerks@gmail.com
 * @idewerks_kevin
 * http://blog.idewerks.com
 *
 ***********************************************************************/

import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { MessageProvider } from '../../providers/message/message-provider';
import { MessageComponent } from '../../components/message/message';
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  public messageList: any;

  constructor(
    public navCtrl: NavController,
    public keyboard: Keyboard,
    public actionCtrl: ActionSheetController,
    public platform: Platform,
    public messageProvider: MessageProvider
  )
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.messageList = this.messageProvider.getMessageList();
    this.keyboard.show;



  }

}
