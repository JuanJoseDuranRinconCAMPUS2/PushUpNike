# 🎫⚙️**Proyecto de Login y Gestión de Productos con React y Node.js**🎫⚙️

------

Este proyecto consiste en el desarrollo de un aplicativo para el manejo de usuarios y productos para nike

![](https://media.tenor.com/9fMzLvqEzsQAAAAC/nike.gif)

------

## ⚙🚨⚙️Requisitos previos ⚙️🚨

Antes de ejecutar el código, asegúrate:

- tener instalada la base de datos MYSQL en tu sistema.
- Asegúrate de tener instalado [Node.js(V18.5.1)](https://nodejs.org/) y [React(V9.5.1)](https://es.react.dev)  en tu sistema antes de comenza


------

## **🍁🎉Instalación🎉**🍁

1. Clona este repositorio en tu máquina: `git clone https://github.com/JuanJoseDuranRinconCAMPUS2/PushUpNike`

     (el proyecto esta en privado asi que solo gente autorizada podra utilizarlo)

2. Accede al directorio del proyecto: `cd PushUpNike`

3. Instala las dependencias: (ejecute el comando `npm i` para instalar las dependencias del proyecto)

     ```js
      npm i
     ```

     <details>
       <summary> <h3> 🏗️ Dependencias Usadas🏗️ </h3></summary> 
         "@types/react": "^18.2.15", <br>
         "@types/react-dom": "^18.2.7",<br>
         "@vitejs/plugin-react-swc": "^3.3.2",<br>
         "concurrently": "^8.2.1",<br>
         "cors": "^2.8.5",<br>
         "dotenv": "16.3.1",<br>
         "eslint": "^8.45.0",<br>
         "eslint-plugin-react": "^7.32.2",<br>
         "eslint-plugin-react-hooks": "^4.6.0",<br>
         "eslint-plugin-react-refresh": "^0.4.3",<br>
         "express": "4.18.2",<br>
         "express-rate-limit": "6.10.0",<br>
         "express-routes-versioning": "1.0.1",<br>
         "express-validator": "7.0.1",<br>
         "jose": "4.14.4",<br>
         "mongodb": "6.0.0",<br>
         "nodemon": "3.0.1",<br>
         "passport": "0.6.0",<br>
         "passport-http-bearer": "1.0.1",<br>
         "prop-types": "15.8.1",<br>
         "react-hook-form": "7.46.1",<br>
         "vite": "^4.4.5",<br>
         "yup": "^1.2.0"<br>
         "@hookform/resolvers": "^3.3.1",<br>
         "axios": "^1.5.0",<br>
         "nodemailer": "^6.9.5",<br>
         "react": "^18.2.0",<br>
         "react-dom": "^18.2.0",<br>
         "react-router-dom": "^6.16.0"<br>
     </details>

4. Accede al archivo de "[db_Nike.sq](https://github.com/JuanJoseDuranRinconCAMPUS2/PushUpNike/blob/main/api/db/db_Nike.sql)" ubicada en la carpeta **db **dentro de api`

5. inicia el archivo y monta la base de datos en tu servidor (ejecuta cada una de los comandos de Mysql de manera Descendente).

6. Para facilitar las consultas ejecuta de manera Descendente el archivo en la misma carpeta:  [data.sql](https://github.com/JuanJoseDuranRinconCAMPUS2/PushUpNike/blob/main/api/db/data.sql) ella encontraras data para alimentar la base de datos

------

## **🏁🎆Configuración**🎆🏁

1. Ubica el archivo  `.env`  en la matriz del proyecto

2. Dentro del archivo `.env`, define las siguientes variables de entorno:

   - VITE_PORT_FRONTEND=5198
   
     VITE_PORT_BACKEND=5199
   
     VITE_HOSTNAME="127.19.8.7"

     NODE_SQL_CONNECT = {"host":"localhost", "user":"campus", "database": "db_Nike", "password": "campus2023", "port" : "3306"}
     
     NODE_JWT_KEY = "H3DFDFKJ32JBVOP0324"
     
     
   
   Reemplaza `NODE_SQL_CONNECT` y con los datos de tu base de datos de Mysql.



------

## 🦊㊙️Uso㊙️🦊

1. Ejecuta el proyecto en modo de desarrollo (Node.js y Vite juntos):

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor Node.js y la aplicación React utilizando Vite al mismo tiempo.

2. O, si prefieres ejecutar solo el servidor Node.js:

   ```bash
   npm run start
   ```

   Esto iniciará solo el servidor Node.js, y la aplicación React se mantendrá en espera.

3. O, si prefieres ejecutar solo la aplicacion de React.js:

   ```bash
   npm run front
   ```

   Esto iniciará solo la aplicación React y el servidor Node.js, se mantendrá en espera. (no es recomendable usar esta)

4. Accede a la aplicación en tu navegador:

   - Aplicación web: [http://127.19.8.7:5198](http://127.19.8.7:5198/)
   - API del servidor: [http://127.19.8.7:5199](http://127.19.8.7:5199/)

------

## **🐰🌌Thunder🌌🐰**

Para acceder a las consultas hechas en el proyecto utiliza el archivo thunde

- 

------

¡Gracias por visitar mi proyecto!
