import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ProductAggregateService } from './product.aggregate.service';
import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly aggregateService:ProductAggregateService,
    private readonly productService:ProductsService
  ) {}

  @Post('create')
  createproduct(@Body() productPayload):Promise<any>{
    return this.productService.create(productPayload)
  }

  @Get('analysis')
  getProducts(): Promise<any>  {
    return this.aggregateService.fetchAggregateData()
  }

  @Get('list')
  getProductsList(): Promise<any>  {
    return this.productService.findAll()
  }

  @Post('delete/:id')
  deleteProduct(@Req() id:string){
    return this.productService.remove(id)
  }
}
