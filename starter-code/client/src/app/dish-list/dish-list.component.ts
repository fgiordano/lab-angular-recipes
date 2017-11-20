import { Component, OnInit } from '@angular/core';
import { DishService } from './../dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  providers: [DishService],

})
export class DishListComponent implements OnInit {

  dishes;

  constructor(private dish: DishService) { }

  ngOnInit() {
  	this.dish.getList()
  		.subscribe((dishes) => {
  			this.dishes = dishes;
  		});
  }

}
