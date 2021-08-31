import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty()
  location: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  facebook: string;
  @ApiProperty()
  twitter: string;
  @ApiProperty()
  linkedin: string;
  @ApiProperty()
  about: string;
}
