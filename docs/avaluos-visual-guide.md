# 🎨 Diseño Visual del Sistema de Avalúos

## Flujo de Usuario - Visual

```
┌─────────────────────────────────────────────────────────┐
│                    SECCIÓN AVALÚOS                       │
│                                                          │
│  ┌──────────────────┐    ┌──────────────────────────┐  │
│  │                  │    │  AVALUOS                  │  │
│  │  Imagen de       │    │                           │  │
│  │  Edificio        │    │  Avaluos realizados       │  │
│  │  con mapa        │    │  de su propriedad.        │  │
│  │                  │    │                           │  │
│  │                  │    │  Evalua tu Propriedad y   │  │
│  │  Su Avaluo desde:│    │  accede al mercado...     │  │
│  │  $2900.00        │    │                           │  │
│  │                  │    │  ┌─────────────────────┐  │  │
│  └──────────────────┘    │  │ your.email@....     │  │  │
│                          │  │                 Find│  │  │
│                          │  │                 out │  │  │
│                          │  └─────────────────────┘  │  │
│                          │                           │  │
│                          │  *Para informacion precisa│  │
│                          │   contactanos             │  │
│                          └──────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

                            ↓ Usuario ingresa email
                            ↓ Click "Find out"
                            
┌─────────────────────────────────────────────────────────┐
│                   📧 MODAL - FORMULARIO                  │
│                                                          │
│   Solicitud de Avalúo                         [✕]       │
│   ─────────────────────────────────────────────────     │
│                                                          │
│   Nombre *              │ Apellidos *                    │
│   ├───────────────┤     │ ├───────────────┤            │
│                                                          │
│   Teléfono *            │ Email *                        │
│   ├───────────────┤     │ ├───────────────┤            │
│                         │   (prellenado)                │
│                                                          │
│   Tipo de bien *        │ Valor estimado *               │
│   ├─ Casa ────────┤     │ ├─ $_________ ─┤             │
│   │  Departamento │                                     │
│   │  Terreno      │                                     │
│   │  Local        │                                     │
│   └───────────────┘                                     │
│                                                          │
│                              ┌───────┐  ┌─────────────┐ │
│                              │Cancelar│  │Enviar       │ │
│                              └───────┘  │solicitud    │ │
│                                         └─────────────┘ │
└─────────────────────────────────────────────────────────┘

                            ↓ Usuario completa
                            ↓ Click "Enviar solicitud"
                            
┌─────────────────────────────────────────────────────────┐
│                    ✅ EMAIL RECIBIDO                     │
│                                                          │
│   Para: avaluador@cervantes.com                         │
│   Asunto: Nueva Solicitud de Avalúo - Juan Pérez       │
│                                                          │
│   Nueva solicitud de avalúo:                            │
│                                                          │
│   DATOS DEL CLIENTE:                                    │
│   Nombre: Juan Pérez González                           │
│   Email: juan.perez@example.com                        │
│   Teléfono: +52 123 456 7890                           │
│                                                          │
│   DATOS DE LA PROPIEDAD:                                │
│   Tipo: Casa                                            │
│   Valor estimado: $5,000,000 MXN                       │
│   Idioma: Español                                       │
│                                                          │
│   ────────────────────────────────────────────────     │
│   Este email fue enviado automáticamente desde el       │
│   sistema de avalúos de Cervantes Bienes Raíces        │
└─────────────────────────────────────────────────────────┘

                            ↓ Avaluador responde
                            ↓ Proceso continúa...
```

---

## 📱 Versión Móvil

```
┌──────────────────┐
│  AVALUOS         │
│                  │
│  Avaluos         │
│  realizados      │
│                  │
│  [Imagen]        │
│                  │
│  ┌────────────┐  │
│  │your@email  │  │
│  │   Find out │  │
│  └────────────┘  │
│                  │
│  *contactanos    │
└──────────────────┘
        ↓
┌──────────────────┐
│ Solicitud [✕]    │
│                  │
│ Nombre *         │
│ ├────────────┤   │
│                  │
│ Apellidos *      │
│ ├────────────┤   │
│                  │
│ Teléfono *       │
│ ├────────────┤   │
│                  │
│ Email *          │
│ ├────────────┤   │
│                  │
│ Tipo *           │
│ ├─Casa───────┤   │
│                  │
│ Valor *          │
│ ├─$__________┤   │
│                  │
│ [Cancel][Enviar] │
└──────────────────┘
```

---

## 🎨 Elementos de Diseño

### Colores del Modal
- **Header**: Fondo blanco, texto oscuro
- **Botón Primario**: Azul/naranja (según tu tema)
- **Botón Secundario**: Gris
- **Inputs**: Borde gris claro, foco azul

### Animaciones
- Modal aparece con fade-in
- Backdrop oscuro semitransparente
- Validación en tiempo real (campos requeridos)
- Spinner/loading al enviar

### Responsive
- **Desktop**: Modal centrado, 2 columnas
- **Tablet**: Modal más estrecho, 2 columnas
- **Mobile**: Modal full-width, 1 columna

---

## 🌟 Estados del Sistema

### Estado 1: Inicial
```
[ Email input vacío ] [Find out button]
```

### Estado 2: Email ingresado
```
[ user@example.com ] [Find out button] ← clickeable
```

### Estado 3: Modal abierto
```
[ Modal visible con formulario vacío ]
[ Email prellenado ]
```

### Estado 4: Enviando
```
[ Botón deshabilitado: "Enviando..." ]
[ Spinner animado ]
```

### Estado 5: Éxito
```
[ Toast notification verde: "¡Solicitud enviada!" ]
[ Modal se cierra automáticamente ]
[ Form se resetea ]
```

### Estado 6: Error
```
[ Toast notification roja: "Error al enviar" ]
[ Modal permanece abierto ]
[ Usuario puede reintentar ]
```

---

## 📝 Textos Bilingües

### Español
- Título: "Solicitud de Avalúo"
- Botón: "Enviar solicitud"
- Éxito: "¡Solicitud enviada con éxito!"
- Tipos: Casa, Departamento, Terreno, Local, Oficina, Otro

### English
- Title: "Appraisal Request"
- Button: "Submit request"
- Success: "Request sent successfully!"
- Types: House, Apartment, Land, Commercial, Office, Other

---

## 🎯 Campos del Formulario

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Nombre | text | ✅ Sí | No vacío |
| Apellidos | text | ✅ Sí | No vacío |
| Teléfono | tel | ✅ Sí | Formato válido |
| Email | email | ✅ Sí | Formato email |
| Tipo de bien | select | ✅ Sí | Opción seleccionada |
| Valor estimado | text | ✅ Sí | No vacío |

---

## 🔔 Notificaciones

### Toast de Éxito (Verde)
```
✅ ¡Solicitud enviada con éxito!
   Nos pondremos en contacto pronto.
```

### Toast de Error (Rojo)
```
❌ Error al enviar la solicitud.
   Por favor intente nuevamente.
```

---

Esta es la visualización completa del sistema. El diseño es limpio, profesional y fácil de usar. 🎨
