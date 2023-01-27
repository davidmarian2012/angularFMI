import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/auth/interfaces/user';
import { USERS } from 'src/app/modules/auth/mock/USERS';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = {username: "Guest", password: "", email: ""};
  submitted: boolean = false;
  saved: boolean = false;

  form = new FormGroup({
    email: new FormControl(this.currentUser.email,[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    confirmPassword: new FormControl('',[
    ])
  })

  constructor(private authSerivce: AuthService, private router: Router) { }

  ngOnInit(): void {
    USERS.map((user)=>{
      if(user.username == this.authSerivce.currentUser)
      {
        this.currentUser.username = user.username;
        this.currentUser.password = user.password;
        this.currentUser.email = user.email;
      }
    })
    this.form.patchValue({
      email: this.currentUser.email
    })
  }

  changeProfile(){
    this.form.markAllAsTouched();
    this.submitted = true;

    USERS.map((user)=>{
      if(user.username ==  this.currentUser.username)
      {
        this.currentUser.email = this.form.get('email')!.value!;
        user.email = this.form.get('email')!.value!;

        if(this.form.get('password')!.value! && this.form.get('password')!.value! == this.form.get('confirmPassword')!.value!) { 
          this.currentUser.password = this.form.get('password')!.value!; 
          user.password = this.form.get('password')!.value!;
        }
      }
    })
    this.saved = true;
    this.router.navigate(['/profile']);
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }

}
