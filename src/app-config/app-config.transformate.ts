import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppConfig } from './app-config';

export const appConfigTransformate = (envObject: Record<string, unknown>): AppConfig => {
  const instance = plainToInstance(AppConfig, envObject, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(instance);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return instance;
};
