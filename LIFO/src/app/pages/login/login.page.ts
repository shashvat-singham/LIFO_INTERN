import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  type: boolean = true;
  isLogin = false;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private global: GlobalService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.isLoggedIn();
  }

  async isLoggedIn(){
    try{
      // this.global.showLoader('','crescent');
      const val = await this.authService.getId();
      console.log('id: ',val);
      if(val) this.navigate();
      // this.global.hideLoader();
    }
    catch(e) {
      console.log(e);
      this.global.hideLoader();
    }
  }

  onSubmit(form: NgForm){
    // console.log('form', form.form.value);
    if(!form.valid) return;
    this.login(JSON.stringify(form.form.value));
  }

  login(form){
    this.global.showLoader('','crescent');
    this.isLogin=true;
    console.log('form: ',form)
    this.apiService.login(form).subscribe((res:any) => {
      this.user = res.body;
      console.log(this.user);
      this.authService.login(JSON.stringify(this.user));
      this.navigate();
    },(error => {
      this.global.errorToast('Invalid Username or Password',3000);
      this.global.hideLoader();
    }));

  }

  navigate(){
    this.global.showToast('Successfully Logged In', 'success','bottom',3000);
    this.global.hideLoader();
    this.router.navigateByUrl('/tabs');
  }

  changeType(){
    this.type = !this.type;
  }

}
