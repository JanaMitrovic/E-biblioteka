import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    http.get('http://localhost:8000/api/books').subscribe(console.log);
  }



  onLogOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/log-in');
    // location.reload();
  }


}
