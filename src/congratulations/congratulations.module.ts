import { Module } from '@nestjs/common';
import { CongratulationsService } from './congratulations.service';
import { CongratulationsController } from './congratulations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Congratulations, CongratulationsSchema } from './schemas/congratulations.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{ 
      name: Congratulations.name,
      useFactory: () => {
        const schema = CongratulationsSchema;
        schema.post('save', function() { 
          const wedding = this;
          wedding.id = wedding._id.toString();
          delete wedding._id;
         });
        return schema;
      }}])
  ],
  controllers: [CongratulationsController],
  providers: [CongratulationsService]
})
export class CongratulationsModule {}
