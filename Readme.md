# STORAGE API

## Tecnologies

Esta es una api desarrollada con Node.js , Express Server y Mongo Atlas como base de datos en la nube
Se instalaron las librerias de express server, nodemon, express valodator

## INSTALACIÓN

El primer paso es instalar las dependencias de Node, con el siguiente comando, dentro de la carpeta del proyecto:

```
npm install

```

En segunda instancia crear en la raíz del proyecto un archivo del tipo ".env" con los siguientes valores de variables:

```
Para prebas locales de desarrollo
PORT=3001
DB_URL_CONNECTION=mongodb+srv://aldoestebanveraz:DSRhuWdnWGKxTcro@eit.07qfkrv.mongodb.net/figures-store

# Aca se pone la de Render
 BASE_URL=http://localhost:3001

# Mercado Pago Acces Token del Vendedor:
MP_ACCESS_TOKEN=TEST-1274724423450454-060620-75f8e49c25c83f8a089bca059b1f4846-1847555716

 FRONT_URL=http://localhost:3000

```

Finalmente, levantar el servidor con el comando:

```
npm run dev

```
