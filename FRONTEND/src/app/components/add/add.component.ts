import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

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

  constructor(
    private validateService:ValidateService,
    private authService:AuthService,
    private router:Router,
    private flashmessage:FlashMessagesService
  ) { }

  ngOnInit() {
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
          this.dept=""
        }else{
          this.flashmessage.show(data.msg,{cssClass:'alert-danger text-center',timeOut:2000});
          this.router.navigate(['/add']);
        }
      });
    }
  }

  isStudentOrHod(){
    if(this.role=='student'||this.role=='hod')
      return true;
    else
      return false;
  }
  isTpoOrHod(){
    if(this.role=='tpo'||this.role=='hod')
      return true;
    else
      return false;
  }

}
