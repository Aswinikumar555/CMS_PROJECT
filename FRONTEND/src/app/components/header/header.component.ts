import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private flashmessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logOut();
    this.flashmessage.show("You are logged out.",{cssClass:"alert-success text-center",timeOut:2000});
  }

}
