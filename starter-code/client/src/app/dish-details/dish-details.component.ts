import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishService } from './../dish.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css'],
  providers: [DishService],
})
export class DishDetailsComponent implements OnInit {
	dish: any;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private dishService: DishService
  	) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.getDishDetails(params['id']);
  	});
  }

  getDishDetails(id) {
  	this.dishService.get(id)
  		.subscribe((dish) => {
  			this.dish = dish;
  		});
  }

  deleteDish() {
  	if (window.confirm('Are you sure?')){
  		this.dishService.remove(this.dish._id)
  			.subscribe(() => {
  				this.router.navigate(['']);
  			});
  	}
  }

}
