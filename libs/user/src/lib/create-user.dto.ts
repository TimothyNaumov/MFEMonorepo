import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserInterface } from '@mfe-monorepo/api-interfaces';

export class CreateUserDto implements CreateUserInterface {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
