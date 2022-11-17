import { IsOptional } from 'class-validator';

export class CreateUsersDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly gender: string;

  @IsOptional()
  readonly mobile: string;
}
