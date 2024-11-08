import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { WrapperDataInterceptor } from './nest-modules/shared-module/interceptors/wrapper-data/wrapper-data.interceptor';
import { NotFoundErrorFilter } from './nest-modules/shared-module/filters/not-found.filter';
import { EntityValidationErrorFilter } from './nest-modules/shared-module/filters/entity-validation-error.filter';
import { MigrationsModule } from './nest-modules/database-module/migrations/migrations.module';
import { getConnectionToken } from '@nestjs/sequelize';
import { migrator } from '@core/shared/infra/db/sequelize/migrator';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(MigrationsModule, {
    logger: ['error'],
  });
  const sequelize = app.get(getConnectionToken());

  migrator(sequelize).runAsCLI();
 
}
bootstrap();
