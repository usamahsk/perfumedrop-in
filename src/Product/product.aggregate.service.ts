import { ProductsService } from "../Product/product.service";
import { OrdersService } from "../Orders/orders.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductAggregateService{

    constructor(
        private readonly productRepository: ProductsService,
        private readonly orderService: OrdersService
    ) { }

    
    async fetchAggregateData() {
        const products= await this.productRepository.findAll()
        var json={}
        return products.forEach(async product=>{
            const prod=await this.orderService.findAll({product_id:product._id})
            json={...{'product_id':product._id,'total_sales': (prod.reduce((n, {quantity}) => n + quantity, 0) * product.price)},...json}  
            console.log(json)
            return json
        })
    }

}