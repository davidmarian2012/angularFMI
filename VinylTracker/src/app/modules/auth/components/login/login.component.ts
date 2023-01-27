import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { USERS } from '../../mock/USERS';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongPass: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  })

  loginUser(): void{
    // this.authService.login(this.form.value)
    //   .pipe(first()).subscribe(
    //     user => {
    //       console.log("hello");
    //     },
    //     () => {
    //       this.router.navigate(['/dashboard']);
    //     }
    //   );
    USERS.map((user) => {
      if(user.username == this.form.get('username')!.value!)
      {
        if(user.password == this.form.get('password')!.value!)
        {
          this.router.navigate(['/dashboard']);
          this.authService.isLoggedIn = true;
          this.authService.currentUser = this.form.get('username')!.value!;
        }
        else
        {
          this.wrongPass = true;
        }
      }
    })
    
  }

}
