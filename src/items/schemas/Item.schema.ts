import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"



@Schema()
export class Item {

    // id?: string; here id will be created automatic when the item is added 

    @Prop()
    name:string;

    @Prop()
    description?: string;

    @Prop()
    qty: number;
}


export const ItemSchema = SchemaFactory.createForClass(Item);
