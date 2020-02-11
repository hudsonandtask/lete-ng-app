import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(private http:HttpClient) {}

  orders = [
    {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "modifiedDate": "2014-07-10T06:07:15 +04:00",
      "diningOption": "green",
      "checks": {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "customer": "Janell Logan",
      "amount": "$3,698.63",
      "paymentStatus": "PAID"
      },
      "source": "In Store",
      "numberOfGuests": 38,
      "approvalStatus": "APPROVED ",
      "createdDevice": "drawer",
      "id": "ec32da23-ca5a-4af2-add5-80af5ea49b32",
      "_rid": "iL9VANmQbEwBAAAAAAAAAA==",
      "_self": "dbs/iL9VAA==/colls/iL9VANmQbEw=/docs/iL9VANmQbEwBAAAAAAAAAA==/",
      "_etag": "\"6000f1c2-0000-0700-0000-5e3c26b30000\"",
      "_attachments": "attachments/",
      "_ts": 1581000371
      },
      {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "modifiedDate": "2014-07-10T06:07:15 +04:00",
      "diningOption": "green",
      "checks": {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "customer": "Janell Logan",
      "amount": "$3,698.63",
      "paymentStatus": "PAID"
      },
      "source": "In Store",
      "numberOfGuests": 38,
      "approvalStatus": "APPROVED ",
      "createdDevice": "drawer",
      "id": "8660909c-5106-4c22-885c-d3cdbd1359ab",
      "_rid": "iL9VANmQbEwCAAAAAAAAAA==",
      "_self": "dbs/iL9VAA==/colls/iL9VANmQbEw=/docs/iL9VANmQbEwCAAAAAAAAAA==/",
      "_etag": "\"600077c6-0000-0700-0000-5e3c683a0000\"",
      "_attachments": "attachments/",
      "_ts": 1581017146
      },
      {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "modifiedDate": "2014-07-10T06:07:15 +04:00",
      "diningOption": "green",
      "checks": {
      "openedDate": "2017-04-20T11:59:45 +04:00",
      "customer": "Janell Logan",
      "amount": "$3,698.63",
      "paymentStatus": "PAID"
      },
      "source": "In Store",
      "numberOfGuests": 38,
      "approvalStatus": "APPROVED ",
      "createdDevice": "drawer",
      "id": "d227fb54-141b-4d1a-85cb-5e979dbf6b38",
      "_rid": "iL9VANmQbEwDAAAAAAAAAA==",
      "_self": "dbs/iL9VAA==/colls/iL9VANmQbEw=/docs/iL9VANmQbEwDAAAAAAAAAA==/",
      "_etag": "\"49020079-0000-0700-0000-5e3d992b0000\"",
      "_attachments": "attachments/",
      "_ts": 1581095211
      }
  ];
  
  orderUrl = "https://leye.azurewebsites.net/api/leteAzureAPI";

  getMockOrders(){
    return this.orders;
  }

  getOrders(){
    return this.http.get(this.orderUrl);
  }

  updateOrders(){

  }

}
