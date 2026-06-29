import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactLeadDto } from './dto/create-contact-lead.dto';

@Injectable()
export class PublicService {
  constructor(private prisma: PrismaService) {}

  async createContactLead(dto: CreateContactLeadDto) {
    const lead = await this.prisma.marketingContactLead.create({
      data: {
        language: normalize(dto.language) || 'es',
        pagePath: normalize(dto.pagePath),
        source: normalize(dto.source) || 'marketing-site',
        name: dto.name.trim(),
        email: dto.email.trim().toLowerCase(),
        phone: normalize(dto.phone),
        objective: normalize(dto.objective),
        message: dto.message.trim(),
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return {
      ok: true,
      lead,
    };
  }
}

function normalize(value?: string | null) {
  const trimmed = (value || '').trim();
  return trimmed || null;
}
