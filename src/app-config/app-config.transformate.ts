import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppConfig } from './app-config';

export const appConfigTransformate = (envObject: Record<string, unknown>): AppConfig => {
  const rawInstance = plainToInstance(AppConfig, envObject, {
    ignoreDecorators: true,
  });

  const errors = validateSync(rawInstance);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  const convertedInstace = plainToInstance(AppConfig, envObject, {
    enableImplicitConversion: true,
  });

  return convertedInstace;
};
