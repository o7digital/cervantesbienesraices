# Sistema de Solicitud de Avalúos

Este sistema permite a los usuarios solicitar avalúos de propiedades a través de un formulario bilingüe (Español/Inglés).

## Configuración

### 1. EmailJS Setup

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un nuevo servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email con los siguientes parámetros:
   - `from_name`: Nombre completo del solicitante
   - `from_email`: Email del solicitante
   - `phone`: Teléfono
   - `property_type`: Tipo de propiedad
   - `estimated_value`: Valor estimado
   - `language`: Idioma (es/en)

4. Copia las credenciales en tu archivo `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_APPRAISER_EMAIL=avaluador@ejemplo.com
```

### 2. Plantilla de Email Sugerida

**Asunto:** Nueva Solicitud de Avalúo - {{from_name}}

**Cuerpo:**
```
Nueva solicitud de avalúo recibida:

Datos del Solicitante:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Teléfono: {{phone}}

Datos de la Propiedad:
- Tipo de bien: {{property_type}}
- Valor estimado: {{estimated_value}}

Idioma de preferencia: {{language}}

---
Este email fue enviado automáticamente desde el sistema de avalúos.
```

## Uso

1. El usuario ingresa su email en el formulario inicial
2. Al hacer clic en "Find out", se abre un modal con campos adicionales
3. El usuario completa el formulario con:
   - Nombre
   - Apellidos
   - Teléfono
   - Email (prellenado)
   - Tipo de bien
   - Valor estimado
4. Al enviar, se manda un email al avaluador configurado

## Archivos Modificados

- `/src/modals/AppraisalModal.tsx` - Modal del formulario (bilingüe)
- `/src/components/homes/home-one/BLockFeatureFour.tsx` - Componente español
- `/src/components/homes/home-eight-en/BLockFeatureFourEn.tsx` - Componente inglés
- `/src/app/api/send-appraisal/route.ts` - API endpoint

## Implementación con EmailJS en el Cliente

Para implementar el envío de emails, actualiza `AppraisalModal.tsx` para usar EmailJS directamente:

```typescript
import emailjs from '@emailjs/browser';

// En el handleSubmit:
const templateParams = {
  to_email: process.env.NEXT_PUBLIC_APPRAISER_EMAIL,
  from_name: `${formData.firstName} ${formData.lastName}`,
  from_email: formData.email,
  phone: formData.phone,
  property_type: formData.propertyType,
  estimated_value: formData.estimatedValue,
  language: language
};

await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Testing

Para probar el sistema:

1. Configura tu email personal en `NEXT_PUBLIC_APPRAISER_EMAIL`
2. Ingresa un email en el formulario inicial
3. Completa todos los campos del modal
4. Verifica que recibas el email con todos los datos

## Producción

Antes de ir a producción:

1. Reemplaza el email de prueba con el del avaluador real
2. Verifica que todas las variables de entorno estén configuradas
3. Prueba el envío de emails en el entorno de producción
4. Configura límites de envío en EmailJS si es necesario
