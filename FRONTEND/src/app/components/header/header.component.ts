import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ManageusersComponent } from '../manageusers/manageusers.component';

@Component({
  providers:[ManageusersComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pselect:String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashmessage:FlashMessagesService,
    private manage:ManageusersComponent
  ) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logOut();
    this.flashmessage.show("You are logged out.",{cssClass:"alert-success text-center",timeOut:2000});
  }
  getuser(){
    console.log(this.pselect);
    if(this.pselect=="hod"){
      console.log("HOD Set");
      this.authService.manageuser='hod';
      console.log(this.authService.manageuser);
      this.router.navigate(['/manageusers']);
    }
    else if(this.pselect=="tpo"){
      console.log("TPO Set");
      this.authService.manageuser='tpo';
      console.log(this.authService.manageuser);
      this.router.navigate(['/manageusers']);
    }
  }

}
