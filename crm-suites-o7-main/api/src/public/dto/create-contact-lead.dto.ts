import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateContactLeadDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsEmail()
  @MaxLength(160)
  email!: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  objective?: string;

  @IsString()
  @MaxLength(5000)
  message!: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  language?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  pagePath?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  source?: string;
}
