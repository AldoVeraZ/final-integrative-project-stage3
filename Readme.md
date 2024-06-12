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

# BASE_URL=http://localhost:3001

# Mercado Pago Acces Token del Vendedor:
MP_ACCESS_TOKEN=TEST-1274724423450454-060620-75f8e49c25c83f8a089bca059b1f4846-1847555716

 FRONT_URL=http://localhost:3000

```

En el Frontend del pryecto crear un archivo del tipo ".env.development.local" que tiene las siguientes variables

```
REACT_APP_BASE_URL_API=http://localhost:3001/api/

# Public Key de usuario de prueba vendedor
(La llave publica tiene que estar en el frontend por lo mismo es esta) si es publica va al frontend por
# que me expone menos cosas

REACT_APP_MP_PUBLIC_KEY=TEST-f78514f2-3fab-4a76-af23-88617c732a53

```

Entrego tambien el enlace a vercel para hacer pruebas de produccion

```
https://final-proyect-stage2-ecommerce.vercel.app/

importante mencionar que vercel tambien tiene sus variables de entorno en su configuracion que son de produccion

REACT_APP_BASE_URL_API: https://final-integrative-project-stage3.onrender.com/api

REACT_APP_MP_PUBLIC_KEY: TEST-f78514f2-3fab-4a76-af23-88617c732a53

```

En Render dentro de su configuracion de variables de entorno estan las siguientes:

```
BASE_URL: https://final-integrative-project-stage3.onrender.com

DB_URL_CONNECTION: mongodb+srv://aldoestebanveraz:DSRhuWdnWGKxTcro@eit.07qfkrv.mongodb.net/figures-store-production

FRONT_URL: https://final-proyect-stage2-ecommerce.vercel.app/

MP_ACCESS_TOKEN: TEST-1274724423450454-060620-75f8e49c25c83f8a089bca059b1f4846-1847555716

```

Si hay alguna confusion descargar el proyecto completo de la nube que incluira los archivos .env tanto para Frontend como para Backend

Dejo tambien las cuentas de usuraio falsas de mercado pago:

```

  Dennis Nedry  Usuario:  TESTUSER1466785861   ;   Contraseña:  0HApdATuq2

  Shemp Howard  Usuario:  TESTUSER415645778   ;    Contraseña:  twxkEQ6U7J


  Tarjetas de pago falsas:
  Mastercard
5416 7526 0258 2580
    11/25
    123

Visa
4168 8188 4444 7115
  11/25
  123


American Express
 3757 781744 61804
 11/25
 1234

Importante logearse con el vendedor falso en modo incongnito, para luego despues en el pago logearse
 con el comprador falso y ingresar una de las tarjetas falsas, te pedira un rut, escoge Otro y inventa
 un Rut falso, luego siguiente compra exitosa y volver


```

Finalmente, levantar el servidor con el comando:

```
npm run dev

```
