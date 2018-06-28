import { Component, OnInit } from '@angular/core';
import { Hod } from '../../models/hod';
import { Tpo } from '../../models/tpo';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  hods: Hod[];
  tpos:Tpo[];
  

  constructor(private authService:AuthService,
    private flashmessage:FlashMessagesService,
    private router:Router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.ngOnInit();
        }
        // Instance of should be: 
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
     }

  ngOnInit() {
    console.log("mange"+this.authService.manageuser);
    console.log(this.authService.loadhod())
    if(this.authService.loadhod())
    {
      console.log("come to this area HOD");
      this.authService.gethods()
      .subscribe(results =>{
        console.log(results);
        if(results.length==0){
          this.flashmessage.show("No result found.",{cssClass:'alert-danger text-center',timeOut:2000});
          this.hods=[];
          this.ngOnInit();
        }else{
          this.hods=results;
          //this.ngOnInit();
        }
      });
    }
    else if(this.authService.loadtpo())
    {
      console.log("come to this area TPO");
      this.authService.gettpos()
      .subscribe(results =>{
        console.log(results);
        if(results.length==0){
          this.flashmessage.show("No result found.",{cssClass:'alert-danger text-center',timeOut:2000});
          this.tpos=[];
          this.ngOnInit();
        }else{
          this.tpos=results;
          //this.ngOnInit();
        }
      });
    }
  }
  deletehod(hod){
    console.log(hod);
    this.authService.deleteStudent(hod.userid).subscribe(data=>{
      if(data.success){
        this.flashmessage.show("student record deleted",{cssClass:'alert-success text-center',timeOut:2000});
        this.hods.splice(this.hods.indexOf(hod),1)
      }
      else
      {
        console.log(data);
        this.flashmessage.show("Something went wrong.",{cssClass:'alert-danger text-center',timeOut:2000});
      }
    })
  }
  updatehod(hod){
      this.authService.selectedUser=hod;
      this.authService.toggleForm=!this.authService.toggleForm;
    }
    deletetpo(tpo){
      console.log(tpo);
      this.authService.deleteStudent(tpo.userid).subscribe(data=>{
        if(data.success){
          this.flashmessage.show("student record deleted",{cssClass:'alert-success text-center',timeOut:2000});
          this.tpos.splice(this.tpos.indexOf(tpo),1)
        }
        else
        {
          console.log(data);
          this.flashmessage.show("Something went wrong.",{cssClass:'alert-danger text-center',timeOut:2000});
        }
      })
    }
    updatetpo(tpo){
        this.authService.selectedUser=tpo;
        this.authService.toggleForm=!this.authService.toggleForm;
      }
}