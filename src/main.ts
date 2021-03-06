import { NestFactory } from '@nestjs/core';
import './utils/env';

import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';
import { authenticate } from './middleware/authentication.middleware';
import { HttpExceptionFilter } from './errors/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(authenticate);
  app.use(helmet());
  app.use(compression());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
  await app.listen(3000);
}

if (!process.env.AUTHORIZATION_KEY && process.env.NODE_ENV !== 'development') {
  throw { error: 'No authorization key and running in production' };
}

if (
  !process.env.DEFAULT_INGEST_TOKEN &&
  process.env.NODE_ENV !== 'development'
) {
  throw { error: 'No ingest token set up and running in production' };
}

bootstrap();
