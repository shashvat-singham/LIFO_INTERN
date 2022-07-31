import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };
  isLoading: boolean = false;
  query: any;
  allRestaurants: any[] = [];

  restaurants: any[] = []
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getAllRestaurants().subscribe((res) => {
      this.allRestaurants = res;
    })
    // setTimeout(() => {
    //   this.allRestaurants = 
    //   this.sInput.setFocus();
    // },500)
  }

  onSearchChange(event){
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    if(this.query.length > 0){
      this.isLoading = true;
      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
          return element.name.toLowerCase().includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 1000)
    }
  }
}
