import { Module, forwardRef } from '@nestjs/common';
import { CategoriesModule } from 'src/categories/categories.module';
import { ProductsModule } from 'src/products/products.module';
import { SubCategoriesModule } from 'src/sub-categories/sub-categories.module';
import { LoaderService } from './loader.service';

@Module({
    imports:[
        forwardRef(()=>ProductsModule),
        forwardRef(()=>CategoriesModule),
        forwardRef(()=>SubCategoriesModule)
    ],
    providers:[LoaderService],
    exports:[LoaderService]
})
export class LoaderModule {}