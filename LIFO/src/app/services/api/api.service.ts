import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { Dish } from 'src/app/models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint = 'https://lifo-app.herokuapp.com/api/v1/'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllRestaurants():Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.endpoint+'restaurant');
  }

  getDishes(param):Observable<any[]>{
    console.log(param);
    return this.httpClient.get<any[]>(this.endpoint+'dish',{params: param});
  }

  login(user):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+'user/login',JSON.parse(user),{
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response'
		});
  }

  signup(user):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+'user/',JSON.parse(user),{
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		  observe: 'response'
    });
  }

  placeOrder(data):Observable<any>{
    console.log('nay', data);
    return this.httpClient.post<any>(this.endpoint+'order/', data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
		  observe: 'response'
    })
  }

  cftoken(data):Observable<any>{
    console.log('token-dat',data);
    return this.httpClient.post<any>(this.endpoint+'order/cftoken', data, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    })
  }

  getOrders(param):Observable<any[]>{
    console.log(param);
    return this.httpClient.get<any[]>(this.endpoint+'order/userOrders',{params:param});
  }



  banners = [
    {banner:'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png'},
    {banner:'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png'},
    {banner:'https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo-500x417.png'}
  ];
  restaurants = [
    {
      _id:'62a57ef83a259afeb841972d',
      img: 'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png',
      name: 'Subway',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 12 IITK'
    },
    {
      _id:'62a57ef83a259afeb841972e',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-500x300.png',
      name: 'Burger King',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 1 IITK'
    },
    {
      _id:'62a57ef83a259afeb841972f',
      img: 'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png',
      name: 'KFC',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 2 IITK'
    },
  ];

  allRestaurants = [
    {
      _id:'62a57ef83a259afeb841972d',
      img: 'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png',
      name: 'Subway',
      open_time: '14:00',
      close_time: '02:00',
      phone: '9876543210'
    },
    {
      _id:'62a57ef83a259afeb841972e',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-500x300.png',
      name: 'Burger King',
      open_time: '14:00',
      close_time: '02:00',
      phone: '9876543210'
    },
    {
      _id:'62a57ef83a259afeb841972f',
      img: 'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png',
      name: 'KFC',
      open_time: '14:00',
      close_time: '02:00',
      phone: '9876543210'
    }
  ];

  restaurants1: any[] = [
    {
      _id:'62a57ef83a259afeb841972d',
      img: 'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png',
      name: 'Subway',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 12 IITK'
    },
    {
      _id:'62a57ef83a259afeb841972e',
      img: 'https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-500x300.png',
      name: 'Burger King',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 1 IITK'
    },
    {
      _id:'62a57ef83a259afeb841972f',
      img: 'https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-500x281.png',
      name: 'KFC',
      open_time: '14:00',
      close_time: '02:00',
      rating: 5,
      phone: '9876543210',
      distance: '2.5 km away',
      address: 'Hall 2 IITK'
    },
  ];

  allItems: any[] = [
    {
      veg:true,
      _id:"62a596216bcd2f651b775064",
      name:"Veg Whopper",
      restaurant:"62a57ef83a259afeb841972d",
      img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
      price:79,
      
  },{
      veg:false,
      _id:"62a596216bcd2f651b775065",
      name:"Chicken Whopper",
      restaurant:"62a57ef83a259afeb841972d",
      img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
      price:79,
      
  },{
      veg:true,
      _id:"62a596216bcd2f651b775066",
      name:"White sauce pasta",
      restaurant:"62a57ef83a259afeb841972d",
      img:"",
      price:79,
      
  },{
      veg:true,
      _id:"62a596216bcd2f651b775067",
      name:"Red sauce pasta",
      restaurant:"62a57ef83a259afeb841972e",
      img:"",
      price:79,
      
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972e",
    img:"",
    price:79,
    
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972f",
    img:"",
    price:79,
    
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972f",
    img:"",
    price:79,
    
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972f",
    img:"",
    price:79,
    
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972f",
    img:"",
    price:79,
    
  },{
    veg:true,
    _id:"62a596216bcd2f651b775067",
    name:"Red sauce pasta",
    restaurant:"62a57ef83a259afeb841972f",
    img:"",
    price:79,
    
  },{
      veg:true,
      _id:"62a596216bcd2f651b775067",
      name:"Red sauce pasta",
      restaurant:"62a57ef83a259afeb841972f",
      img:"",
      price:79,
      
    }
  ];

  orders: any[] = [
    {
      id: '62a57ef83a259afeb8419jbh',
      totalPrice: 158.00,
      overHeads: 10.00,
      grandTotal: 168.00,
      restaurant: {
        _id:'62a57ef83a259afeb841972d',
        img: 'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png',
        name: 'Subway',
        open_time: '14:00',
        close_time: '02:00',
        rating: 5,
        phone: '9876543210',
        distance: '2.5 km away',
        address: 'Hall 12 IITK'
      },
      status: 'Picked Up',
      paid: 'Card',
      time: 'July 1, 2022 11:44 AM',
      user: '62a57ef83a259afeb8419j87',
      orders: [
        {
          veg:true,
          _id:"62a596216bcd2f651b775064",
          name:"Veg Whopper",
          restaurant:"62a57ef83a259afeb841972d",
          img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
          price:79,
          quantity: 2,
        },{
          veg:false,
          _id:"62a596216bcd2f651b775065",
          name:"Chicken Whopper",
          restaurant:"62a57ef83a259afeb841972d",
          img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
          price:79,
          quantity: 2, 
        }
      ]
    },{
      id: '62a57ef83a259afeb8419jbi',
      totalPrice: 158.00,
      overHeads: 10.00,
      grandTotal: 168.00,
      restaurant: {
        _id:'62a57ef83a259afeb841972d',
        img: 'https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-500x278.png',
        name: 'Subway',
        open_time: '14:00',
        close_time: '02:00',
        rating: 5,
        phone: '9876543210',
        distance: '2.5 km away',
        address: 'Hall 12 IITK'
      },
      status: 'Picked Up',
      paid: 'Card',
      time: 'July 2, 2022 08:14 PM',
      user: '62a57ef83a259afeb8419j87',
      orders: [
        {
          veg:true,
          _id:"62a596216bcd2f651b775064",
          name:"Veg Whopper",
          restaurant:"62a57ef83a259afeb841972d",
          img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
          price:79,
          quantity: 2,
        },{
          veg:false,
          _id:"62a596216bcd2f651b775065",
          name:"Chicken Whopper",
          restaurant:"62a57ef83a259afeb841972d",
          img:"https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
          price:79,
          quantity: 3, 
        }
      ]
    }
  ]
}
