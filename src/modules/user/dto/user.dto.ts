import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  @IsBoolean()
  status: boolean;
}
