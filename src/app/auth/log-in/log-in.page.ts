import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  logInForm: FormGroup;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      email: new FormControl('Username@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('Password123', [Validators.required, Validators.minLength(8)]),
    });
  }

  onLogIn(){
    console.log(this.logInForm.value);
    this.authService.logIn(this.logInForm.value).subscribe(res =>{
      console.log('Uspesna prijava!');
      console.log(res);
      this.router.navigateByUrl('/books');
    });
  }

}
