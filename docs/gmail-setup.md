# 📧 Guía Rápida: Configurar Gmail para Envío de Emails

## ⚡ 3 Minutos de Configuración

### Paso 1: Activar Verificación en 2 Pasos

1. Ve a: https://myaccount.google.com/security
2. Busca "Verificación en dos pasos"
3. Si no está activada, actívala (sigue los pasos de Google)

### Paso 2: Generar App Password

1. Ve a: https://myaccount.google.com/apppasswords
2. En "Select app" → Elige **"Mail"** (Correo)
3. En "Select device" → Elige **"Other"** y escribe: **"Cervantes Web"**
4. Click en **"Generate"**
5. **COPIA la contraseña de 16 caracteres** que aparece:
   ```
   Ejemplo: abcd efgh ijkl mnop
   ```
6. **¡IMPORTANTE!** Copia SIN espacios: `abcdefghijklmnop`

### Paso 3: Pegar en .env.local

Abre el archivo `.env.local` en tu proyecto:

```bash
EMAIL_USER=tu-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop  # ← Pega aquí (sin espacios)
APPRAISER_EMAIL=tu-email@gmail.com
```

### Paso 4: Reiniciar Servidor

En la terminal:
```bash
# Presiona Ctrl+C para detener
# Luego:
npm run dev
```

---

## ✅ Prueba que Funciona

1. Ve a http://localhost:3000
2. Busca la sección "AVALUOS"
3. Ingresa tu email
4. Click "Find out"
5. Completa el formulario
6. Click "Enviar solicitud"
7. **Revisa tu email** (incluso en spam)

---

## 🚨 Problemas Comunes

### ❌ "Invalid login: 535-5.7.8 Username and Password not accepted"

**Causa**: Contraseña incorrecta o no es un App Password

**Solución**:
1. Verifica que copiaste el App Password completo (16 caracteres)
2. SIN espacios en `.env.local`
3. Genera un nuevo App Password si es necesario
4. Reinicia el servidor

### ❌ "2FA is not enabled"

**Causa**: No tienes verificación en 2 pasos activada

**Solución**:
1. Ve a https://myaccount.google.com/security
2. Activa "Verificación en dos pasos"
3. Luego genera el App Password

### ❌ "Missing credentials"

**Causa**: No guardaste `.env.local` o tiene errores de sintaxis

**Solución**:
1. Asegúrate de que el archivo se llama exactamente `.env.local`
2. Debe estar en la raíz del proyecto (al lado de `package.json`)
3. Sin espacios extra al inicio o final de las líneas
4. Guarda el archivo y reinicia el servidor

---

## 🔐 Seguridad

- ✅ `.env.local` NO se sube a Git (está en `.gitignore`)
- ✅ Usa App Password, NO tu contraseña de Gmail normal
- ✅ Puedes revocar App Passwords en cualquier momento
- ✅ Cada app debe tener su propio App Password

---

## 📊 Límites de Gmail

- **500 emails por día** (cuenta gratuita)
- **2000 emails por día** (Google Workspace)

Para más emails, considera:
- SendGrid (100 emails/día gratis)
- AWS SES (muy barato)
- Resend (3000 emails/mes gratis)
- Postmark

---

## 🎉 ¡Eso es todo!

Una vez configurado, el sistema:
- ✅ Envía emails automáticamente
- ✅ Funciona en español e inglés
- ✅ Emails profesionales con formato HTML
- ✅ Reply-to configurado para responder directamente al cliente

**No necesitas tocar nada más.** El formulario simplemente funciona.
