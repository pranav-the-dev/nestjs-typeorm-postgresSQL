import { IsOptional } from 'class-validator';

export class CreateItemDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly description: string;
}
