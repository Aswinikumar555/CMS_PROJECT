import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userid: String;
  password: string;
  role: String;
  dept: String;
  email:String;
  toggleform:boolean;
  selectedUser:Student;
  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router,
    private flashmessage:FlashMessagesService
  ) { }

  ngOnInit() {
    this.toggleform=this.authService.toggleForm;
    this.selectedUser=this.authService.selectedUser;
    //console.log(this.selectedUser);
  }
  onAddSubmit(){
    var obj={
      userid: this.userid,
      password: this.password,
      role: this.role,
      dept: this.dept,
      email:this.email
    };
    if(!this.validateService.validateAddFields(obj)){
      this.flashmessage.show('All fields are required',{cssClass:'alert-danger text-center',timeOut:2000});
    }
    else{
      this.authService.addUser(obj).subscribe(data =>{
        console.log(data);
        if(data.success){
          this.flashmessage.show(data.msg,{cssClass:'alert-success text-center',timeOut:2000});
          this.router.navigate(['/add']);
          this.userid="";
          this.password="";
          this.role="";
          this.dept="";
          this.email="";
        }else{
          this.flashmessage.show(data.msg,{cssClass:'alert-danger text-center',timeOut:2000});
          this.router.navigate(['/add']);
        }
      });
    }
  }

  onUpdateSubmit(form){
    console.log(form.value.userid);
    var obj={
      userid: form.value.userid,
      role: form.value.role,
      dept: form.value.dept,
      email:form.value.email
    };
    console.log(obj);
    if(!this.validateService.validateUpdateFields(obj)){
      this.flashmessage.show('All fields are required',{cssClass:'alert-danger text-center',timeOut:2000});
    }
    else{
      this.authService.updateUser(form.value.userid,obj).subscribe(data =>{
        console.log(data);
        if(data.success){
          this.flashmessage.show(data.msg,{cssClass:'alert-success text-center',timeOut:2000});
          this.router.navigate(['/search']);
          this.userid="";
          this.role="";
          this.dept="";
          this.email="";
        }else{
          this.flashmessage.show(data.msg,{cssClass:'alert-danger text-center',timeOut:2000});
          this.router.navigate(['/add']);
        }
      });
    }
    this.authService.toggleForm=!this.authService.toggleForm;
  }
  isStudentOrHod(){
    if(this.role=='student'||this.role=='hod')
      return true;
    else
      return false;
  }
  isStudentOrTpoOrHod(){
    if(this.role=='tpo'||this.role=='hod'||this.role=='student')
      return true;
    else
      return false;
  }
  isStuOrHod(){
    if(this.selectedUser.role=='student'||this.selectedUser.role=='hod')
      return true;
    else
      return false;
  }
  isStuOrTpoOrHod(){
    if(this.selectedUser.role=='tpo'||this.selectedUser.role=='hod'||this.selectedUser.role=='student')
      return true;
    else
      return false;
  }

  isAdmin(){
    if(this.role=='admin')
      return true;
    else
      return false;
  }
}
