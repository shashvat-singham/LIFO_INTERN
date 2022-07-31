import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key, value){
    Storage.set({key: key, value: value});
  }

  getStorage(key){
    return Storage.get({key: key});
  }

  async removeStorage(key){
    await Storage.remove({key: key});
  }

  clearStorage(){
    Storage.clear();
  }
}
