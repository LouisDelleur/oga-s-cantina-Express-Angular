import { Component, Input, input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string ='center';

  tags?:Tag[];
  constructor(private foodServices:FoodService){}
  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.foodServices.getAllTags();
  }

}
