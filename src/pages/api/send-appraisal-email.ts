import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, reason } = req.body;

  if (!name || !email || !phone || !reason) {
    return res.status(400).json({
      message: "Missing required fields",
      error: "Nombre, email, teléfono y motivo son obligatorios",
    });
  }

  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.forwardemail.net";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.FORWARD_EMAIL_USER || "info@cervantesbienesraices.com";
    const smtpPass = process.env.FORWARD_EMAIL_PASSWORD;
    const smtpSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: '"Cervantes Bienes Raíces" <info@cervantesbienesraices.com>',
      to: "info@cervantesbienesraices.com",
      cc: [
        "javiercerva62@gmail.com",
        "julio.cervantesc@gmail.com",
        "olivier.steineur@gmail.com",
        "bpacheco@avaluos.com.mx",
      ].join(", "),
      subject: "Nueva Solicitud de Avalúo",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
            .header { background-color: #ff5722; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: white; padding: 30px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; padding: 10px; background-color: #f5f5f5; border-left: 4px solid #ff5722; }
            .label { font-weight: bold; color: #ff5722; display: block; margin-bottom: 5px; }
            .value { color: #333; font-size: 16px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 Nueva Solicitud de Avalúo</h1>
              <p>Detalles enviados desde el sitio web</p>
            </div>
            <div class="content">
              <p>Se ha recibido una solicitud de avalúo.</p>
              <div style="margin: 30px 0;">
                <div class="field">
                  <span class="label">Nombre completo:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Correo electrónico:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Teléfono:</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                <div class="field">
                  <span class="label">Motivo del avalúo:</span>
                  <span class="value">${reason}</span>
                </div>
              </div>
              <p><strong>Próximos pasos:</strong></p>
              <ul>
                <li>Contactar al cliente dentro de 24 horas.</li>
              </ul>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente desde cervantesbienesraices.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nueva Solicitud de Avalúo

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}
Motivo del avalúo: ${reason}

Contactar al cliente dentro de 24 horas.
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending appraisal email:", error);
    return res.status(500).json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
