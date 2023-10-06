import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('COINC-MS-AUTH API')
    .setDescription('This is a documentation of Authentication micro service')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'JWT Auth Token',
      },
      'Authorization',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
};