import { IsNumber, IsString } from 'class-validator';

export class Env {
  @IsNumber()
  PORT!: number;

  @IsString()
  GREETING!: string;
}
