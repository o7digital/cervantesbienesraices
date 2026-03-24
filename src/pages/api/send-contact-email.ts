import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string;
  error?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, propertyTitle, propertyId, sourcePath } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Missing required fields",
      error: "Name, email, and message are required",
    });
  }

  try {
    const smtpHost = process.env.SMTP_HOST || "smtp.forwardemail.net";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser =
      process.env.FORWARD_EMAIL_USER || "info@cervantesbienesraices.com";
    const smtpPass = process.env.FORWARD_EMAIL_PASSWORD;
    const smtpSecure = smtpPort === 465;

    if (!smtpPass) {
      throw new Error("FORWARD_EMAIL_PASSWORD is not configured");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message)).replaceAll("\n", "<br />");
    const safePropertyTitle = propertyTitle ? escapeHtml(String(propertyTitle)) : "";
    const safePropertyId = propertyId ? escapeHtml(String(propertyId)) : "";
    const safeSourcePath = sourcePath ? escapeHtml(String(sourcePath)) : "";

    const contextHtml = [
      safePropertyTitle
        ? `<div class="field"><span class="label">Propiedad:</span><span class="value">${safePropertyTitle}</span></div>`
        : "",
      safePropertyId
        ? `<div class="field"><span class="label">Referencia:</span><span class="value">${safePropertyId}</span></div>`
        : "",
      safeSourcePath
        ? `<div class="field"><span class="label">Página de origen:</span><span class="value">${safeSourcePath}</span></div>`
        : "",
    ]
      .filter(Boolean)
      .join("");

    const contextText = [
      propertyTitle ? `Propiedad: ${propertyTitle}` : "",
      propertyId ? `Referencia: ${propertyId}` : "",
      sourcePath ? `Página de origen: ${sourcePath}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: '"Cervantes Bienes Raíces" <info@cervantesbienesraices.com>',
      to: "info@cervantesbienesraices.com",
      cc: [
        "javiercerva62@gmail.com",
        "julio.cervantesc@gmail.com",
        "olivier.steineur@gmail.com",
      ].join(", "),
      replyTo: String(email),
      subject: safePropertyTitle
        ? `Nueva consulta por propiedad: ${String(propertyTitle)}`
        : "Nuevo mensaje de contacto",
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
                <h1>Nueva consulta de contacto</h1>
                <p>Mensaje enviado desde cervantesbienesraices.com</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nombre completo:</span>
                  <span class="value">${safeName}</span>
                </div>
                <div class="field">
                  <span class="label">Correo electrónico:</span>
                  <span class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></span>
                </div>
                ${contextHtml}
                <div class="field">
                  <span class="label">Mensaje:</span>
                  <span class="value">${safeMessage}</span>
                </div>
              </div>
              <div class="footer">
                <p>Responder directamente a ${safeEmail} para dar seguimiento.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `Nueva consulta de contacto

Nombre completo: ${name}
Correo electrónico: ${email}
${contextText ? `${contextText}\n` : ""}Mensaje:
${message}
`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
