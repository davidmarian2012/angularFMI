import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    confirmPassword: new FormControl('',[
      Validators.required
    ])
  })

  newUser: User = {
    username: "",
    password: "",
    email: ""
  }

  registerUser() {
    this.form.markAllAsTouched();
    this.newUser.username = this.form.get('username')!.value!;
    this.newUser.password = this.form.get('password')!.value!;
    this.newUser.email = this.form.get('email')!.value!;

    this.authService.saveUser(this.newUser);
    this.router.navigate(['/login']);
    // this.authService.register(this.form.value)
    // .pipe(first()).subscribe(
    //   () => {
    //     this.router.navigate(['/login']);
    //   }
    // );
  }

}
