import { Customer } from "./customer.model";
import { Product } from "./product.model";

export class CustomerCart{
    id?: number;
	
	customer: Customer;
	
	products: Product[];
	
	totalPrice: number;
}