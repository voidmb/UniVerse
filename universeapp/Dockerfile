# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json si existen
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación de producción
RUN npm run build

# Expone el puerto 3000 al exterior del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
