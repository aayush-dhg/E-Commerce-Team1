export class Orders{
    id?:number;
    vendorId:number;
    customerId:number;
    productName:string;
    price:number;
    quantity:number;
    isApproved:boolean;
    purchaseDate:Date;
}