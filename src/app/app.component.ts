import { Component } from '@angular/core';

interface CustomerI{
  id: number,
  name: string,
  address: { street: string; city: string; state: string ; zip: string };
  status : boolean,
  activeYears : number,
  productPrice: number[],
}
interface ProductsDetailsI {
  pId : string,
  pName: string,
  deliveryAddress: deliveryAddressI,
}
  
 interface deliveryAddressI{
    Name: string,
    city: string,
    state: string,
    zip: string,
  }



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = ' John';
  id: number = 20;
  isVote: Boolean = true;

  // [arrays]

  states: string[] = ['Tx', 'Wi', 'Vi', 'Ny'];
  grades: number[] = [1, 4, 5, 6, 8];

  // objects: {}
  customer: CustomerI = {
    id: 10,
    name: 'Tom',
    address: {
      street: '1234 junction',
      city: 'menomonee',
      state: 'WI',
      zip: '12345',
    },
    status : true,
    activeYears : 5,
    productPrice: [10, 23, 25, 55],

  };

  //this.customer.name
  //this.customer.address.city

  //array Of Objects:any ={ }
  products: ProductsDetailsI[] =[
    {
    pId : 'Px123',
    pName: 'playStation',
    deliveryAddress:{
      Name:'Rick',
      city:'Dallas',
      state:'Tx',
      zip: '47565',
    }
  },
  {
    pId : 'ix12',
    pName: 'iphone',
    deliveryAddress:{
      Name:'lee',
      city:'mckney',
      state:'Tx',
      zip: '53792',
    }
  },
  {
    pId : 'hp125',
    pName: 'laptop',
    deliveryAddress:{
      Name:'John',
      city:'Falls',
      state:'WI',
      zip: '59627',
    }
  },
  {
    pId : 'LG1234',
    pName: 'Televison',
    deliveryAddress:{
      Name:'nick',
      city:'Tampa',
      state:'Florida',
      zip: '59386',
    }
  },
  ];
  //this. products[2].deliveryaddress.state;
  //this.products[0].pname

  //functions

  testValues() {
    console.log(this.products[0].pName);
    console.log(this.products[3].deliveryAddress.state);
    console.log(this.name);


  }

  getStudentsInfo() {
     console.log("triggering..")
  }


  
}
