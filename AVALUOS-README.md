# 📧 Sistema de Emails - Con ForwardEmail

## 🎯 ¿Qué Hace?

**Sistema profesional de emails** usando **ForwardEmail + cervantesbienesraices.com**

### ✅ Ventajas:
- Emails profesionales: `info@cervantesbienesraices.com`
- Redirección automática a tu Gmail
- Los clientes ven el dominio profesional
- Ilimitado (sin límites de Gmail)
- Puedes responder como info@cervantes desde Gmail

---

## ⚡ Configuración (Ya está casi lista)

### Paso 1: Ya tienes ForwardEmail configurado ✅
- Dominio: `cervantesbienesraices.com`
- Redirección: `info@cervantesbienesraices.com` → tu Gmail

### Paso 2: Edita `.env.local`

```bash
# Tu Gmail (para enviar)
EMAIL_USER=olivier.steineur@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop  # App Password

# A dónde llegan (ForwardEmail redirige a tu Gmail)
APPRAISER_EMAIL=info@cervantesbienesraices.com
CONTACT_EMAIL=info@cervantesbienesraices.com
```

### Paso 3: Reiniciar

```bash
npm run dev
```

---

## 📋 Formularios Configurados

### 1. Formulario de Avalúos
- **Llega a**: `info@cervantesbienesraices.com`
- **ForwardEmail redirige a**: Tu Gmail
- **From**: "Cervantes Bienes Raíces - Avalúos" <info@cervantesbienesraices.com>

### 2. Formulario de Contacto  
- **Llega a**: `info@cervantesbienesraices.com`
- **ForwardEmail redirige a**: Tu Gmail
- **From**: "Cervantes Bienes Raíces - Contacto" <info@cervantesbienesraices.com>

---

## 🔄 Cómo Funciona

```
Cliente llena formulario
         ↓
Se envía a: info@cervantesbienesraices.com
         ↓
ForwardEmail redirige automáticamente
         ↓
Llega a tu Gmail
         ↓
Puedes responder como info@cervantes...
```

---

## 🌐 Para Producción (Vercel/Railway)

Variables de entorno:
```
EMAIL_USER=tu-gmail@gmail.com
EMAIL_PASSWORD=tu-app-password
APPRAISER_EMAIL=info@cervantesbienesraices.com
CONTACT_EMAIL=info@cervantesbienesraices.com
```

---

## ✅ Ventajas del Setup Actual

- ✅ **Dominio profesional** visible para clientes
- ✅ **Redirección automática** a Gmail (ForwardEmail)
- ✅ **Sin límites** de envío
- ✅ **Reply funciona** con el dominio
- ✅ **Gratis** con ForwardEmail básico
- ✅ **Múltiples alias** (info@, avaluos@, contacto@)

---

## 🧪 Prueba

```bash
# 1. Verifica que .env.local esté configurado
# 2. Reinicia
npm run dev

# 3. Llena formulario en http://localhost:3000
# 4. Revisa tu Gmail
# 5. Verás que viene de info@cervantesbienesraices.com
```

---

**¡Mucho más profesional!** 🎉

## 🎯 ¿Qué Hace?

**Todos los formularios del sitio envían emails a TU Gmail.** 

No necesitas crear cuentas de email como:
- ❌ info@cervantesbienesraices.com
- ❌ avaluos@cervantesbienesraices.com
- ❌ contacto@cervantesbienesraices.com

**TODO llega a tu Gmail personal.** ✅

---

## ⚡ Configuración (2 pasos)

### Paso 1: Genera App Password de Gmail

1. Ve a: https://myaccount.google.com/apppasswords
2. Click "Generate" (Generar)
3. Copia la contraseña de 16 caracteres: `abcd efgh ijkl mnop`

### Paso 2: Edita `.env.local`

```bash
# Tu Gmail (desde donde se ENVÍAN los emails)
EMAIL_USER=olivier.steineur@gmail.com

# App Password (pega sin espacios)
EMAIL_PASSWORD=abcdefghijklmnop

# A dónde LLEGAN los emails de avalúos
APPRAISER_EMAIL=olivier.steineur@gmail.com

# A dónde LLEGAN los emails de contacto (info@)
CONTACT_EMAIL=olivier.steineur@gmail.com
```

Guarda y reinicia: `npm run dev`

---

## 📋 Formularios Configurados

### 1. Formulario de Avalúos
- **Usuario ve**: Sección "AVALUOS" en home
- **Llega a**: `APPRAISER_EMAIL`
- **Contiene**: Nombre, email, teléfono, tipo de propiedad, valor

### 2. Formulario de Contacto  
- **Usuario ve**: Página `/contact`
- **Piensa que escribe a**: info@cervantesbienesraices.com
- **Llega a**: `CONTACT_EMAIL`
- **Contiene**: Nombre, email, mensaje

---

## 🔄 Cómo Funciona

```
Cliente llena formulario
         ↓
Se envía desde: tu-gmail@gmail.com
         ↓
Llega a: tu-gmail@gmail.com (configurable)
         ↓
Puedes responder directamente al cliente
```

---

## 🌐 Para Producción (Vercel/Railway)

1. Ve a Settings → Environment Variables
2. Agrega las 4 variables:
   ```
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASSWORD=tu-app-password
   APPRAISER_EMAIL=email-para-avaluos@gmail.com
   CONTACT_EMAIL=email-para-contacto@gmail.com
   ```
3. Redeploy

**Puedes cambiar los emails de recepción cuando quieras, solo edita las variables.**

---

## ✅ Ventajas

- ✅ No necesitas dominio de email
- ✅ 1 sola cuenta de Gmail sirve para todo
- ✅ Cambias donde llegan los emails en cualquier momento
- ✅ Reply-to funciona (respondes directo al cliente)
- ✅ Gratis (500 emails/día con Gmail)

---

## 🧪 Prueba

```bash
# 1. Edita .env.local con tu Gmail
# 2. Reinicia servidor
npm run dev

# 3. Ve a http://localhost:3000
# 4. Llena el formulario de avalúos o contacto
# 5. Revisa tu Gmail (incluye spam)
```

---

**¡Eso es TODO!** 🎉 Simple y funcional.

## ✅ Archivos Creados/Modificados

### Nuevos archivos:
- ✅ `/src/modals/AppraisalModal.tsx` - Modal bilingüe del formulario
- ✅ `/src/app/api/send-appraisal/route.ts` - API endpoint con Nodemailer
- ✅ `/docs/avaluos-setup.md` - Documentación detallada
- ✅ `.env.example` - Variables de entorno ejemplo
- ✅ `.env.local` - Tu configuración local (NO subir a Git)

### Archivos modificados:
- ✅ `/src/components/homes/home-one/BLockFeatureFour.tsx` (Español)
- ✅ `/src/components/homes/home-eight-en/BLockFeatureFourEn.tsx` (Inglés)

---

## 🚀 Configuración en 2 Pasos (SIMPLE)

### Paso 1: Configurar Gmail App Password

1. **Ve a tu cuenta de Google**: https://myaccount.google.com/apppasswords
2. **Genera una "App Password"** (contraseña de aplicación)
   - Necesitas tener verificación en 2 pasos activada
   - Selecciona "Correo" y "Otro dispositivo"
   - Google te dará una contraseña de 16 caracteres: `xxxx xxxx xxxx xxxx`
3. **Copia esa contraseña** (sin espacios)

### Paso 2: Editar `.env.local`

Abre el archivo `.env.local` y actualiza:

```bash
# Tu email de Gmail
EMAIL_USER=tu-email@gmail.com

# App Password que acabas de generar (16 caracteres SIN espacios)
EMAIL_PASSWORD=xxxxxxxxxxxxxxxx

# Email donde llegarán las solicitudes (puede ser el mismo)
APPRAISER_EMAIL=tu-email@gmail.com
```

### Paso 3: Reiniciar el Servidor

```bash
# Ctrl+C para detener
# Luego:
npm run dev
```

---

## 🎯 Cómo Funciona

### Flujo del Usuario:

1. **Usuario ve la sección de avalúos**
   - Imagen de la propiedad
   - Campo de email + botón "Find out"

2. **Usuario ingresa su email y hace clic en "Find out"**
   - Se abre un modal con el formulario completo

3. **Modal muestra campos**:
   - ✅ Nombre *
   - ✅ Apellidos *
   - ✅ Teléfono *
   - ✅ Email * (prellenado)
   - ✅ Tipo de bien * (Casa, Departamento, Terreno, Local, Oficina, Otro)
   - ✅ Valor estimado *

4. **Usuario completa y envía**
   - **El sistema envía un EMAIL automáticamente** al avaluador
   - Mensaje de confirmación
   - Modal se cierra

5. **Tú recibes el email** con todos los datos del cliente

---

## 🌐 Soporte Bilingüe

- ✅ Español (`/`)
- ✅ Inglés (`/en`)

Todos los textos y emails se adaptan automáticamente.

---

## 🧪 Testing

```bash
# 1. Asegúrate de configurar .env.local correctamente
# 2. Reinicia el servidor
npm run dev

# 3. Abre http://localhost:3000
# 4. Busca la sección "AVALUOS"
# 5. Ingresa tu email
# 6. Completa el formulario
# 7. Verifica que recibiste el email
```

---

## ❓ Troubleshooting

### ❌ "Error al procesar la solicitud"

**Causa**: Configuración incorrecta de Gmail

**Solución**:
1. Verifica que tengas 2FA activado en Gmail
2. Genera un nuevo App Password
3. Copia la contraseña SIN espacios en `.env.local`
4. Reinicia el servidor

### ❌ No recibo emails

1. Revisa tu carpeta de spam
2. Verifica que `APPRAISER_EMAIL` sea correcto
3. Revisa la consola del servidor (terminal) por errores
4. Prueba enviar un email de prueba con el mismo Gmail

### ❌ "Invalid login"

- Tu `EMAIL_PASSWORD` debe ser un **App Password**, NO tu contraseña de Gmail normal
- Genera uno nuevo en: https://myaccount.google.com/apppasswords

---

## 📧 Producción

Para producción en Vercel/Railway:

1. Ve a Settings → Environment Variables
2. Agrega:
   ```
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASSWORD=tu-app-password
   APPRAISER_EMAIL=avaluador-real@cervantes.com
   ```
3. Redeploy la aplicación

**IMPORTANTE**: Para producción profesional, considera usar servicios como:
- SendGrid
- AWS SES
- Resend
- Postmark

Gmail tiene límites de envío (500 emails/día).

---

**¡Listo! 🎉** Ahora el formulario envía emails REALES sin configuración complicada.
