import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, Platform } from '@ionic/angular';

// import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
import { MessageI } from 'src/app/interfaces/message';

const firebaseConfig = {
  apiKey: "AIzaSyDE3IkmgIdxh_NDWuFf78jR5GRv2eelad4",
  authDomain: "hba2022-e5821.firebaseapp.com",
  databaseURL: "https://hba2022-e5821-default-rtdb.firebaseio.com",
  projectId: "hba2022-e5821",
  storageBucket: "hba2022-e5821.appspot.com",
  messagingSenderId: "239569286794",
  appId: "1:239569286794:web:0966c7e3330cdcd5c01f73",
  measurementId: "G-J6ZLJ2MNQ6"
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  // @ViewChild('content') content: Content;
  @ViewChild("scrollElement") content: IonContent;
  user = {
    uid: 'eMWXZ083bBYgEJrM1cdC7c5K6I32',
    displayName: 'Denis Hernández Michel'
  };
  messages: MessageI[];
  message: string;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.message = '';
    this.route.queryParams.subscribe(params => {
      if (params && params.userinfo) {
        this.user = JSON.parse(params.userinfo);
      }
    });
    firebase.initializeApp(firebaseConfig);
    this.getMessages();
  }

  ngOnInit() { }

  getMessages() {
    var messagesRef = firebase.database().ref().child("messages");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];      
      for (var key in data) {
        if (data[key].user_sender === this.user.uid || data[key].user_receive === this.user.uid) {
          this.messages.push(data[key]);
        }
      }
      this.content.scrollToBottom();
    });
  }

  sendMessage() {
    var messagesRef = firebase.database().ref().child("messages");
    messagesRef.push({
      content: this.message,
      user_sender: this.user.uid,
      user_receive: 2,
      displayName: this.user.displayName
    });
    this.message = "";
    this.content.scrollToBottom();
  }
       
}
