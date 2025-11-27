import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, propertyType, estimatedValue, language } = body;

    // Validación básica
    if (!firstName || !lastName || !phone || !email || !propertyType || !estimatedValue) {
      return NextResponse.json(
        { error: language === 'es' ? 'Todos los campos son requeridos' : 'All fields are required' },
        { status: 400 }
      );
    }

    // Valida formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: language === 'es' ? 'Email inválido' : 'Invalid email' },
        { status: 400 }
      );
    }

    // Email del avaluador (configurable vía .env o hardcoded para dev)
    const appraiserEmail = process.env.APPRAISER_EMAIL || 'olivier.steineur@gmail.com';

    // Configurar transportador de email
    // IMPORTANTE: Para desarrollo, usaremos Gmail
    // En producción, deberías usar un servicio profesional
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'tu-email@gmail.com', // Tu email
        pass: process.env.EMAIL_PASSWORD || 'tu-app-password'  // App password de Gmail
      }
    });

    // Preparar el contenido del email
    const propertyTypeTranslations: Record<string, Record<string, string>> = {
      casa: { es: 'Casa', en: 'House' },
      departamento: { es: 'Departamento', en: 'Apartment' },
      terreno: { es: 'Terreno', en: 'Land' },
      local: { es: 'Local comercial', en: 'Commercial space' },
      oficina: { es: 'Oficina', en: 'Office' },
      otro: { es: 'Otro', en: 'Other' }
    };

    const propertyTypeLabel = propertyTypeTranslations[propertyType]?.[language] || propertyType;

    const emailContent = language === 'es' ? `
      <h2>Nueva Solicitud de Avalúo</h2>
      <hr>
      <h3>Datos del Cliente:</h3>
      <ul>
        <li><strong>Nombre completo:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
      </ul>
      
      <h3>Datos de la Propiedad:</h3>
      <ul>
        <li><strong>Tipo de bien:</strong> ${propertyTypeLabel}</li>
        <li><strong>Valor estimado:</strong> ${estimatedValue}</li>
      </ul>
      
      <hr>
      <p><small>Este email fue enviado automáticamente desde el sistema de avalúos de Cervantes Bienes Raíces.</small></p>
    ` : `
      <h2>New Appraisal Request</h2>
      <hr>
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Full name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      
      <h3>Property Information:</h3>
      <ul>
        <li><strong>Property type:</strong> ${propertyTypeLabel}</li>
        <li><strong>Estimated value:</strong> ${estimatedValue}</li>
      </ul>
      
      <hr>
      <p><small>This email was sent automatically from Cervantes Real Estate appraisal system.</small></p>
    `;

    // Enviar email
    await transporter.sendMail({
      from: `"Cervantes Bienes Raíces - Avalúos" <info@cervantesbienesraices.com>`,
      to: appraiserEmail,
      subject: language === 'es' 
        ? `Nueva Solicitud de Avalúo - ${firstName} ${lastName}` 
        : `New Appraisal Request - ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email // Para que el avaluador pueda responder directamente
    });

    console.log('✅ Email de avalúo enviado exitosamente a:', appraiserEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: language === 'es' 
          ? 'Solicitud enviada correctamente' 
          : 'Request sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error al enviar email de avalúo:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud / Error processing request' },
      { status: 500 }
    );
  }
}
