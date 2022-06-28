export interface InterRoute{
    path:string;
    component:()=>any;
}

export interface data{
    id:number;
    name:string;
    breed:string;
    price:string;
    description:string;
    imageUrl:string;
  }