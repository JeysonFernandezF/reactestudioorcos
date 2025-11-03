# Etapa 1: Construcción de la app
FROM node:latest AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos del proyecto
COPY package*.json ./
RUN npm install

COPY . .

# Compilamos la app para producción
RUN npm run build

# Etapa 2: Servir la app con Nginx
FROM nginx:alpine

# Copiamos los archivos compilados desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando por defecto para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
