import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish | undefined;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id1 = +this.route.snapshot.params['id'];
    const id = String(id1);
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
