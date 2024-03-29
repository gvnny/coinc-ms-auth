import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './utils/config/swaggerConfig'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
