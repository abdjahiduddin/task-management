import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();

  const configService = app.get(ConfigService);
  const port = configService.get('HOST_PORT');
  const env = process.env.STAGE;

  await app.listen(port);
  logger.log(`${env}, Application listening on port ${port}`);
}
bootstrap();
