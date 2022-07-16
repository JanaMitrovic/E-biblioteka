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
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onLogIn(){
    console.log(this.logInForm.value);
    this.authService.logIn(this.logInForm.value).subscribe(res =>{
      if(res.success == true){
        console.log('Uspesno');

        window.sessionStorage.setItem("access_tocken", res.access_token);

        this.router.navigateByUrl('/books');
      }else{
        console.log('neuspesno');
      }
      
    });
  }

}
