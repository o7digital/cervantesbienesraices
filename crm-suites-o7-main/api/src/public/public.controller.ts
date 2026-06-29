import { Body, Controller, Post } from '@nestjs/common';
import { CreateContactLeadDto } from './dto/create-contact-lead.dto';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Post('contact')
  createContactLead(@Body() dto: CreateContactLeadDto) {
    return this.publicService.createContactLead(dto);
  }
}
