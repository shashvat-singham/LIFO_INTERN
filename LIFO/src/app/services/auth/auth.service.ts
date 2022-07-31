import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }

  async login(user):Promise<any>{
    return await this.storage.setStorage('user', user);
  }

  async getId(){
    return (await this.storage.getStorage('user')).value;
  }

  register(){
    
  }

  resetPassword(){
    
  }

  logout(){
    
  }

}
