import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CongratulationsModule } from './congratulations/congratulations.module';
import { CsrfModule } from './csrf/csrf.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`), 
    CongratulationsModule,
    CsrfModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
      // serveRoot: '/invitation',
      serveStaticOptions: {extensions: ["js"]},
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
