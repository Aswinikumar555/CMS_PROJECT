import { Component, OnInit } from '@angular/core';
import { Hod } from '../../models/hod';
import { Tpo } from '../../models/tpo';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  users: any = [];
  type:String;
  usertype:String;
  constructor(private authService:AuthService,
    private flashmessage:FlashMessagesService,
    private router:Router) {
     }
  ngOnInit() 
  {
    const type : String = localStorage.getItem('type');
    if(this.type){
      this.getUsers(this.type);
      localStorage.removeItem('type');
    }
    this.authService.userTypesObservable$.subscribe(
      (type: String) => {
         this.getUsers(type);
      }
    )
  }
  hodcomp(type:String){
    if(type=="hod"){
      return true;
    }
    else{
      return false;
    }
  }
  getUsers(type: String){
    this.hodcomp(type);
    this.usertype=type+"s";
    this.users = [];
    type === 'hod' ? this.managehod() : ( type === 'tpo' ? this.managetpo() : '') 
  }
  managehod(){
    console.log("come to this area HOD");
      this.authService.gethods()
      .subscribe(results =>{
        console.log(results);
        if(results.length==0){
          this.flashmessage.show("No result found.",{cssClass:'alert-danger text-center',timeOut:2000});
        }else{
          this.users=results;
        }
      });
  }
  managetpo(){
    console.log("come to this area TPO");
      this.authService.gettpos()
      .subscribe(results =>{
        console.log(results);
        if(results.length==0){
          this.flashmessage.show("No result found.",{cssClass:'alert-danger text-center',timeOut:2000});
        }else{
          this.users=results;
        }
      });
  }
  delete(hod){
    console.log(hod);
    this.authService.deleteUser(hod.userid).subscribe(data=>{
      if(data.success){
        this.flashmessage.show("student record deleted",{cssClass:'alert-success text-center',timeOut:2000});
        this.users.splice(this.users.indexOf(hod),1)
      }
      else
      {
        console.log(data);
        this.flashmessage.show("Something went wrong.",{cssClass:'alert-danger text-center',timeOut:2000});
      }
    })
  }
  update(hod){
      this.authService.selectedUser=hod;
      this.authService.toggleForm=!this.authService.toggleForm;
    }
   
}