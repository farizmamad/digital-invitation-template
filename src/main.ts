import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { nestCsrf } from './common';
import { CsrfFilter } from './filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: configService.get('ALLOWED_ORIGIN'),
    methods: ['GET', 'POST']
  })
  app.use(cookieParser());
  app.use(nestCsrf());
  app.useGlobalFilters(new CsrfFilter);
  const port = configService.get('PORT');
  await app.listen(port ?? 3000);
}
bootstrap();
