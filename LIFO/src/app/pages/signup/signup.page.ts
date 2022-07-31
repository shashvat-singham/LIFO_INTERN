import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private global: GlobalService,
    private apiService: ApiService,
  ) { }

  type: boolean = true;

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // console.log('form', form.form.value);
    if(!form.valid) return;
    this.signup(JSON.stringify(form.form.value));
  }

  signup(form){
    console.log('form: ',form);
    this.apiService.signup(form).subscribe((res:any) => {
      console.log(res.body);
      this.navigate();
    },(error => {
      this.global.errorToast('Phone Number already exist');
    }))
  }

  navigate()
  {
    this.router.navigateByUrl('/login');
  }

  changeType(){
    this.type = !this.type;
  }
}
