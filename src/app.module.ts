import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configVariables from './config/configVariables';
import { ItemsModule } from './items/items.module';

@Module({
  //__________bring mongose mongose module to the root app module and connect
  imports: [ 
             MongooseModule.forRoot(configVariables.MONGODB_CLOUD_URI),
             ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


