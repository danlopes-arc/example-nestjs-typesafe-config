import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Env } from './env';

export const parseEnv = (envObject: Record<string, unknown>): Env => {
  const instance = plainToInstance(Env, envObject, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(instance);

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return instance;
};
