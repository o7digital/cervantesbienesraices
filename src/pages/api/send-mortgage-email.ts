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

  const { name, email, phone } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      message: "Missing required fields",
      error: "Name, email, and phone are required",
    });
  }

  try {
    // Configuration du transporteur ForwardMail
    // ForwardMail utilise SMTP, donc nous configurons nodemailer pour envoyer via ForwardMail
    const smtpHost = process.env.SMTP_HOST || "smtp.forwardemail.net";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.FORWARD_EMAIL_USER || "info@cervantesbienesraices.com";
    const smtpPass = process.env.FORWARD_EMAIL_PASSWORD;
    const smtpSecure = smtpPort === 465; // 465 = SSL, 587 = STARTTLS

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true si port 465, false sinon (STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass, // À configurer dans les variables d'environnement
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: '"Cervantes Bienes Raices" <info@cervantesbienesraices.com>',
      to: "mariana.sanchez@creditaria.com",
      cc: [
        "javiercerva62@gmail.com",
        "julio.cervantesc@gmail.com",
        "olivier.steineur@gmail.com",
      ].join(", "),
      subject: "Nueva Solicitud de Consultoría Hipotecaria / New Mortgage Consultation Request",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #ff5722;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 5px 5px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f5f5f5;
              border-left: 4px solid #ff5722;
            }
            .label {
              font-weight: bold;
              color: #ff5722;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              font-size: 16px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 Nueva Solicitud de Crédito Hipotecario</h1>
              <p>New Mortgage Loan Request</p>
            </div>
            <div class="content">
              <p>Se ha recibido una nueva solicitud de consultoría para crédito hipotecario desde el sitio web.</p>
              <p><em>A new mortgage consultation request has been received from the website.</em></p>
              
              <div style="margin: 30px 0;">
                <div class="field">
                  <span class="label">Nombre completo / Full Name:</span>
                  <span class="value">${name}</span>
                </div>
                
                <div class="field">
                  <span class="label">Correo electrónico / Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                
                <div class="field">
                  <span class="label">Teléfono / Phone:</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
              </div>
              
              <p><strong>Próximos pasos / Next steps:</strong></p>
              <ul>
                <li>Contactar al cliente dentro de las próximas 24 horas</li>
                <li><em>Contact the client within the next 24 hours</em></li>
              </ul>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente desde cervantesbienesraices.com</p>
              <p><em>This email was sent automatically from cervantesbienesraices.com</em></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nueva Solicitud de Crédito Hipotecario / New Mortgage Loan Request

Nombre completo / Full Name: ${name}
Correo electrónico / Email: ${email}
Teléfono / Phone: ${phone}

Por favor, contactar al cliente dentro de las próximas 24 horas.
Please contact the client within the next 24 hours.

---
Este correo fue enviado automáticamente desde cervantesbienesraices.com
This email was sent automatically from cervantesbienesraices.com
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
