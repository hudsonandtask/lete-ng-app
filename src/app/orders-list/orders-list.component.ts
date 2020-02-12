import { Component, OnInit, Input} from '@angular/core';

import { OrdersServiceService } from '../orders-service.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  @Input() orders;
  
  constructor(
    private orderService: OrdersServiceService
  ) { }

  ngOnInit(): void {
    // subscribe is a HO func. 
    // takes an input as functions 
    // maps this internal prop to the data returned by the HO. 
    // 

    this.orderService.getOrders().subscribe(
      data => this.orders = data, 
      error => console.log(error)
      );
  }

}
