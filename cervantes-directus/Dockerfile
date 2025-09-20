# Usa Node 22 oficial
FROM node:22-alpine

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero para aprovechar cache
COPY cervantes-directus/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY cervantes-directus .

# Puerto por defecto para Directus
EXPOSE 8055

# Comando de arranque
CMD ["npx", "directus", "start"]
