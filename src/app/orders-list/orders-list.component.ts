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
    this.orders = this.orderService.getOrders();
  }

}
