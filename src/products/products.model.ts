export class Product {
  // method 1 of receiving properties
  // => id:string,title:string,description:string,price:number

  // method 2 of receiving properties
  // => constructor(id:string,title:string, description:string, price:number ){}

  //method 3 of receiving properties: add public or private accessor before the properties
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}
