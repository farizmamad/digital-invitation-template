import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CongratulationsDocument = Congratulations & Document;

@Schema({ id: true, timestamps: true })
export class Congratulations {  
  @Prop()
  name: string;
  
  @Prop()
  congratulations: string;
  
  @Prop()
  presence: string;
  
  @Prop()
  totalAudience: number;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CongratulationsSchema = SchemaFactory.createForClass(Congratulations);