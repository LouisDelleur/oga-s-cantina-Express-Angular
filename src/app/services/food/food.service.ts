import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {id : 1 , name:'Bantha chai',cookTime:'15',price:5.00,favorite:true,origins:'Tatooine',stars:4.5,imageUrl:'./images/BlueMilk.png',tags:['Drink','Desert']},
      {id : 2 , name:'Paonga fresca',cookTime:'20',price:7.50,favorite:false,origins:'Naboo',stars:4.5,imageUrl:'./images/Paonga.png',tags:['Drink','Cocktail']},
      {id : 3 , name:'Photon Fizzle',cookTime:'20',price:8.00,favorite:false,origins:'Vandor',stars:3.5,imageUrl:'./images/Photon.png',tags:['Drink','Cocktail']},
      {id : 4 , name:'Hyperdrive',cookTime:'20',price:8.00,favorite:false,origins:'Kessel',stars:4,imageUrl: './images/Hyperdrive.png',tags:['Drink','Cocktail']},
      {id : 5 , name:'Mimbanese Mudslide',cookTime:'1 hour',price:9.00,favorite:false,origins:'Batuu',stars:3.7,imageUrl:'./images/Mimbanese.png',tags:['Desert','Pudding']},
      {id : 6 , name:'Bespin Cloud Drops',cookTime:'1-2 hour',price:6.50,favorite:false,origins:'Cloud City',stars:4.7,imageUrl:'./images/Cloud.png',tags:['Desert','Meringue']},
      {id : 7 , name:"Nectrose Freeze",cookTime:'30',price:10.00,favorite:true,origins:'Batuu',stars:3,imageUrl:'./images/Nectrose.png',tags:['Desert','Ice cream']},
      {id : 8 , name:"Gormaanda's Glowblue Noodless",cookTime:'15',price:14.00,favorite:false,origins:'Orto',stars:3.7,imageUrl:'./images/Glowblue.png',tags:['Dish','Noodle']},
      {id : 9 , name:"Yorshrimp Noodle Salad",cookTime:'15',price:12.00,favorite:false,origins:'Naboo',stars:4.2,imageUrl:'./images/YobShrimp.png',tags:['Dish','Salad']},
      {id : 10 , name:"Ronto Wrap",cookTime:'10min',price:13.50,favorite:false,origins:'Tatooine',stars:5,imageUrl:'./images/Ronto.png',tags:['Dish','Sandwich']},
      {id : 11 , name:"Mustafarian Lava Buns",cookTime:'10',price:8,favorite:false,origins:'Mustafar',stars:2.1,imageUrl:'./images/Mustafarian.png',tags:['Bread','Hot']},
      {id : 12 , name:"Ronto Wrappers",cookTime:'20-25',price:5,favorite:false,origins:'Tatooine',stars:3.8,imageUrl:'./images/Ronto_Bread.png',tags:['Bread','Utinni!']},
      {id : 13 , name:"topato soup",cookTime:'15',price:10,favorite:false,origins:'Tatooine',stars:4,imageUrl:'./images/Topato.png',tags:['Soup','GoodSoup']},
      {id : 13 , name:"Tiingilar",cookTime:'12',price:11,favorite:true,origins:'Mandalore',stars:1,imageUrl:'./images/Tiingilar.jpg',tags:['Soup','BadSoup']},
    
    ]
  }

  getAllByTag(tag:string):Food[]{
    return tag == "All" ? 
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags():Tag[]{
    return[
      {name:'All',count:13},
      {name:'Drink',count:4},
      {name:'Desert',count:4},
      {name:'Pudding',count:1},
      {name:'Ice cream',count:1},
      {name:'Cocktail',count:3},
      {name:'Bread',count:2},
      {name:'Soup',count:2},
      {name:'GoodSoup',count:1},
      {name:'BadSoup',count:1},
      {name:'Dish',count:3},
      {name:'Salad',count:1},
      {name:'Noodle',count:1},
      {name:'Sandwich',count:1},
      {name:'Hot',count:1},
      {name:'Utinni!',count:1},

    ]
  }
  getAllBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));

  }

  getFoodByID(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
}
