import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Valida formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }

    // Email de contacto (configurable vía .env)
    const contactEmail = process.env.CONTACT_EMAIL || 'olivier.steineur@gmail.com';

    // Configurar transportador de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Contenido del email
    const emailContent = `
      <h2>Nuevo Mensaje de Contacto</h2>
      <p><strong>Desde:</strong> info@cervantesbienesraices.com</p>
      <hr>
      
      <h3>Datos del Cliente:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      
      <h3>Mensaje:</h3>
      <p style="background: #f5f5f5; padding: 15px; border-left: 3px solid #333;">
        ${message.replace(/\n/g, '<br>')}
      </p>
      
      <hr>
      <p><small>Este mensaje fue enviado desde el formulario de contacto del sitio web.</small></p>
    `;

    // Enviar email
    await transporter.sendMail({
      from: `"Cervantes Bienes Raíces - Contacto" <info@cervantesbienesraices.com>`,
      to: contactEmail,
      subject: `Nuevo mensaje de ${name} - Contacto Web`,
      html: emailContent,
      replyTo: email // Para que puedas responder directamente al cliente
    });

    console.log('✅ Email de contacto enviado a:', contactEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error al enviar email de contacto:', error);
    return NextResponse.json(
      { error: 'Error sending message' },
      { status: 500 }
    );
  }
}
