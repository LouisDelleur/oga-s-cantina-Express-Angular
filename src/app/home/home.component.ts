import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  foods : Food[] = [];
  constructor(private foodServices:FoodService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.foods = this.foodServices.getAllBySearchTerm(params['searchTerm'])
      else if (params['tag'])
        this.foods = this.foodServices.getAllByTag(params['tag']);
      else
      this.foods = this.foodServices.getAll();
    })
  }

}
