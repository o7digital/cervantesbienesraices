# 📋 MEMO TÉCNICO - Sistema de Emails Cervantes Bienes Raíces
**Fecha:** 26 de Noviembre 2025  
**Proyecto:** cervantesbienesraices  
**Developer:** Olivier Steineur

---

## 🎯 RESUMEN EJECUTIVO

Se implementó un **sistema unificado de emails** para todos los formularios del sitio web usando **Nodemailer + Gmail**.

### Problema Resuelto:
- ❌ **ANTES**: Necesitaba crear múltiples cuentas de email del dominio (info@, avaluos@, contacto@)
- ✅ **AHORA**: TODO se maneja con 1 sola cuenta de Gmail personal

### Resultado:
- 2 formularios funcionales: **Avalúos** y **Contacto**
- Emails automáticos a Gmail configurado
- Sistema bilingüe (Español/Inglés)
- Sin dependencias de servicios externos (EmailJS eliminado)

---

## 📦 ARCHIVOS MODIFICADOS/CREADOS

### ✅ Nuevos Archivos

#### 1. `/src/modals/AppraisalModal.tsx`
**Función:** Modal bilingüe para formulario de avalúos  
**Campos:**
- Nombre (firstName)
- Apellidos (lastName)
- Teléfono (phone)
- Email (prellenado)
- Tipo de bien (propertyType): Casa, Departamento, Terreno, Local, Oficina, Otro
- Valor estimado (estimatedValue)

**API llamada:** `POST /api/send-appraisal`

---

#### 2. `/src/app/api/send-appraisal/route.ts`
**Función:** API endpoint para enviar emails de avalúos  
**Método:** POST  
**Tecnología:** Nodemailer + Gmail SMTP

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "phone": "string",
  "email": "string",
  "propertyType": "casa|departamento|terreno|local|oficina|otro",
  "estimatedValue": "string",
  "language": "es|en"
}
```

**Variables ENV usadas:**
- `EMAIL_USER`: Gmail que envía
- `EMAIL_PASSWORD`: App Password de Gmail
- `APPRAISER_EMAIL`: Destino del email

**Email enviado:**
- **From:** "Cervantes Bienes Raíces" <EMAIL_USER>
- **To:** APPRAISER_EMAIL
- **Reply-To:** Email del cliente
- **Subject:** "Nueva Solicitud de Avalúo - [Nombre Cliente]"
- **Format:** HTML profesional

---

#### 3. `/src/app/api/send-contact/route.ts`
**Función:** API endpoint para formulario de contacto  
**Método:** POST  
**Tecnología:** Nodemailer + Gmail SMTP

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Variables ENV usadas:**
- `EMAIL_USER`: Gmail que envía
- `EMAIL_PASSWORD`: App Password de Gmail
- `CONTACT_EMAIL`: Destino del email

**Email enviado:**
- **From:** "Cervantes Bienes Raíces - Contacto" <EMAIL_USER>
- **To:** CONTACT_EMAIL
- **Reply-To:** Email del cliente
- **Subject:** "Nuevo mensaje de [Nombre] - Contacto Web"
- **Format:** HTML profesional

---

### ✏️ Archivos Modificados

#### 4. `/src/components/homes/home-one/BLockFeatureFour.tsx`
**Cambios:**
- Agregado estado para email y modal: `useState`
- Manejo de submit del formulario inicial
- Integración con `<AppraisalModal>`
- **Idioma:** Español

**Flujo:**
1. Usuario ingresa email
2. Click "Find out"
3. Se abre modal con formulario completo
4. Se envía a `/api/send-appraisal`

---

#### 5. `/src/components/homes/home-eight-en/BLockFeatureFourEn.tsx`
**Cambios:** Igual que #4 pero en inglés
- Modal en inglés (`language="en"`)
- Textos traducidos

---

#### 6. `/src/components/forms/ContactForm.tsx`
**Cambios:**
- ❌ **Removido:** EmailJS (`import emailjs from '@emailjs/browser'`)
- ✅ **Agregado:** Fetch a `/api/send-contact`
- Manejo de loading state (`isSubmitting`)
- Mejor manejo de errores

**ANTES:**
```tsx
emailjs.sendForm('service_070078r', 'template_lojvsvb', ...)
```

**AHORA:**
```tsx
fetch('/api/send-contact', {
  method: 'POST',
  body: JSON.stringify({ name, email, message })
})
```

---

#### 7. `.env.local` (CREADO - NO SUBIR A GIT)
**Variables de configuración:**
```bash
# Gmail que envía todos los emails
EMAIL_USER=olivier.steineur@gmail.com

# App Password de Gmail (16 caracteres)
EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx

# Destino emails de avalúos
APPRAISER_EMAIL=olivier.steineur@gmail.com

# Destino emails de contacto (info@cervantesbienesraices.com llega aquí)
CONTACT_EMAIL=olivier.steineur@gmail.com
```

---

#### 8. `.env.example` (ACTUALIZADO)
Template para otros developers con explicación detallada.

---

## 🔧 DEPENDENCIAS INSTALADAS

```bash
npm install nodemailer @types/nodemailer
```

**Versión instalada:** Ver `package.json`

**Nota:** `@emailjs/browser` ya existía pero ahora se usa solo como fallback (puede removerse si no se usa en otros lugares).

---

## ⚙️ CONFIGURACIÓN REQUERIDA

### Para Desarrollo Local:

1. **Generar App Password de Gmail:**
   - URL: https://myaccount.google.com/apppasswords
   - Requisito: 2FA activado en Gmail
   - Copiar contraseña de 16 caracteres (sin espacios)

2. **Editar `.env.local`:**
   ```bash
   EMAIL_USER=tu-gmail@gmail.com
   EMAIL_PASSWORD=abcdefghijklmnop
   APPRAISER_EMAIL=tu-gmail@gmail.com
   CONTACT_EMAIL=tu-gmail@gmail.com
   ```

3. **Reiniciar servidor:**
   ```bash
   npm run dev
   ```

### Para Producción (Vercel/Railway):

1. **Environment Variables:**
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `APPRAISER_EMAIL`
   - `CONTACT_EMAIL`

2. **Redeploy** la aplicación

---

## 🌐 ENDPOINTS API

### POST `/api/send-appraisal`
**Propósito:** Enviar solicitudes de avalúo  
**Content-Type:** application/json  
**Response Success (200):**
```json
{
  "success": true,
  "message": "Solicitud enviada correctamente"
}
```
**Response Error (400/500):**
```json
{
  "error": "Mensaje de error"
}
```

### POST `/api/send-contact`
**Propósito:** Enviar mensajes de contacto  
**Content-Type:** application/json  
**Response Success (200):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```
**Response Error (400/500):**
```json
{
  "error": "Error message"
}
```

---

## 🧪 TESTING

### Formulario de Avalúos:
1. Ir a: `http://localhost:3000` o `http://localhost:3000/en`
2. Buscar sección "AVALUOS" / "APPRAISALS"
3. Ingresar email → Click "Find out"
4. Completar formulario modal
5. Click "Enviar solicitud" / "Submit request"
6. Verificar email en Gmail configurado

### Formulario de Contacto:
1. Ir a: `http://localhost:3000/contact`
2. Llenar: Name, Email, Message
3. Click "Send Message"
4. Verificar email en Gmail configurado

### Checklist de Validación:
- [ ] Modal de avalúos se abre correctamente
- [ ] Validación de campos funciona
- [ ] Email llega con formato correcto
- [ ] Reply-to funciona (puedes responder al cliente)
- [ ] Funciona en español
- [ ] Funciona en inglés
- [ ] Formulario de contacto funciona
- [ ] Loading states funcionan
- [ ] Mensajes de error/éxito aparecen

---

## 🚨 TROUBLESHOOTING

### Error: "Invalid login: 535-5.7.8"
**Causa:** App Password incorrecto  
**Solución:**
1. Verificar 2FA activado en Gmail
2. Generar nuevo App Password
3. Copiar SIN espacios en `.env.local`
4. Reiniciar servidor

### Error: "Missing credentials"
**Causa:** Variables ENV no configuradas  
**Solución:**
1. Verificar que `.env.local` existe
2. Verificar valores sin espacios extra
3. Reiniciar servidor

### No llegan emails
**Solución:**
1. Revisar carpeta spam
2. Verificar `APPRAISER_EMAIL` / `CONTACT_EMAIL`
3. Revisar consola del servidor por errores
4. Verificar límites de Gmail (500/día)

---

## 📊 LÍMITES Y CONSIDERACIONES

### Gmail SMTP:
- **Límite:** 500 emails/día (cuenta gratuita)
- **Límite:** 2000 emails/día (Google Workspace)
- **Velocidad:** ~100 emails/hora recomendado

### Para Escalar:
Si necesitas más volumen, migrar a:
- **SendGrid:** 100 emails/día gratis, luego pago
- **AWS SES:** Muy barato, ~$0.10 por 1000 emails
- **Resend:** 3000 emails/mes gratis
- **Postmark:** Excelente deliverability

**Cambio necesario:** Solo actualizar transporter en APIs:
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

---

## 🔐 SEGURIDAD

### ✅ Implementado:
- App Password (no contraseña real de Gmail)
- `.env.local` en `.gitignore` (no se sube a Git)
- Validación de email format
- Validación de campos requeridos
- Reply-to para evitar spam

### ⚠️ Recomendaciones:
- **Producción:** Considerar rate limiting (ej: max 10 requests/min por IP)
- **Producción:** Agregar reCAPTCHA para evitar spam
- **Producción:** Monitorear volumen de emails enviados
- Rotar App Password cada 6 meses

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
cervantesbienesraices/
├── .env.local                          # Config local (NO subir a Git)
├── .env.example                        # Template de configuración
├── AVALUOS-README.md                   # Guía rápida de uso
├── package.json                        # nodemailer agregado
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── send-appraisal/
│   │       │   └── route.ts            # ✅ NUEVO - API avalúos
│   │       └── send-contact/
│   │           └── route.ts            # ✅ NUEVO - API contacto
│   ├── components/
│   │   ├── forms/
│   │   │   └── ContactForm.tsx         # ✏️ MODIFICADO - Sin EmailJS
│   │   └── homes/
│   │       ├── home-one/
│   │       │   └── BLockFeatureFour.tsx       # ✏️ MODIFICADO - ES
│   │       └── home-eight-en/
│   │           └── BLockFeatureFourEn.tsx     # ✏️ MODIFICADO - EN
│   └── modals/
│       └── AppraisalModal.tsx          # ✅ NUEVO - Modal bilingüe
└── docs/
    ├── gmail-setup.md                   # Guía configuración Gmail
    └── avaluos-visual-guide.md          # Guía visual del flujo
```

---

## 🎨 UI/UX

### Modal de Avalúos:
- **Diseño:** Bootstrap modal centrado
- **Responsive:** Mobile-first
- **Estados:**
  - Loading: "Enviando..." con botón deshabilitado
  - Success: Toast verde + cierre automático
  - Error: Toast rojo + mantener modal abierto
- **Validación:** HTML5 + backend

### Formulario de Contacto:
- **Diseño:** Form inline existente
- **Estados:** Loading con "Sending..."
- **Toast notifications:** react-toastify

---

## 🌍 INTERNACIONALIZACIÓN

### Idiomas Soportados:
- **Español (ES):** `/` 
- **Inglés (EN):** `/en`

### Componentes Bilingües:
- `AppraisalModal.tsx`: Prop `language="es"|"en"`
- Emails: Subject y contenido adaptados según idioma

### Textos Traducidos:
- Nombres de campos
- Placeholders
- Botones
- Mensajes de error/éxito
- Tipos de propiedad
- Subjects de emails

---

## 📈 PRÓXIMOS PASOS (OPCIONAL)

### Mejoras Recomendadas:

1. **reCAPTCHA v3**
   - Evitar spam en formularios
   - No afecta UX (invisible)

2. **Email Templates Profesionales**
   - Usar plantillas HTML más elaboradas
   - Incluir logo de Cervantes
   - Colores corporativos

3. **Confirmación al Usuario**
   - Enviar email de confirmación al cliente
   - "Recibimos tu mensaje, te contactaremos pronto"

4. **Dashboard Admin**
   - Ver solicitudes recibidas
   - Estadísticas de formularios
   - Guardar en DB (opcional)

5. **Webhooks/Notificaciones**
   - WhatsApp notification al recibir solicitud
   - Slack/Discord integration
   - SMS para solicitudes urgentes

6. **A/B Testing**
   - Probar diferentes CTAs
   - Optimizar conversión de formularios

---

## 📞 CONTACTOS Y ACCESOS

### Gmail Configurado:
- **Email:** olivier.steineur@gmail.com
- **App Password:** Generado, guardado en `.env.local`
- **Gestión:** https://myaccount.google.com/apppasswords

### Repository:
- **Owner:** o7digital
- **Repo:** cervantesbienesraices
- **Branch:** main

### Hosting (cuando se despliegue):
- **Platform:** TBD (Vercel/Railway)
- **Variables ENV:** Configurar en platform dashboard

---

## ✅ CHECKLIST DE HANDOVER

Para el próximo desarrollador:

- [ ] Revisar este memo técnico completo
- [ ] Leer `AVALUOS-README.md` para setup rápido
- [ ] Configurar `.env.local` con Gmail personal
- [ ] Probar formulario de avalúos (ES + EN)
- [ ] Probar formulario de contacto
- [ ] Verificar emails llegan correctamente
- [ ] Configurar variables ENV en producción
- [ ] Hacer deploy y probar en producción
- [ ] Actualizar `APPRAISER_EMAIL` y `CONTACT_EMAIL` con emails reales

---

## 📝 NOTAS FINALES

### Lo que FUNCIONA:
✅ Formulario de avalúos (ES/EN)  
✅ Formulario de contacto  
✅ Envío de emails a Gmail  
✅ Reply-to configurado  
✅ Validaciones  
✅ Loading states  
✅ Error handling  
✅ Notificaciones toast  

### Lo que NO está (y no es necesario):
❌ Cuentas de email del dominio  
❌ EmailJS  
❌ Servicios externos pagos  
❌ Configuración compleja  

### Tiempo de Setup:
- **Developer nuevo:** ~5 minutos (solo App Password)
- **Producción:** ~2 minutos (configurar ENV variables)

---

**Última actualización:** 26 Nov 2025  
**Versión:** 1.0  
**Status:** ✅ PRODUCTION READY

---

## 🚀 COMANDO RÁPIDO PARA PRÓXIMO DEV

```bash
# 1. Clonar repo
git clone https://github.com/o7digital/cervantesbienesraices.git
cd cervantesbienesraices

# 2. Instalar dependencias
npm install

# 3. Copiar .env.example a .env.local
cp .env.example .env.local

# 4. Editar .env.local con tu Gmail + App Password
nano .env.local

# 5. Correr dev server
npm run dev

# 6. Probar formularios en:
# http://localhost:3000 (avalúos + contacto)
```

**FIN DEL MEMO TÉCNICO** 📋
