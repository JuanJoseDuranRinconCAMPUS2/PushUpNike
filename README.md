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


## 🦊㊙️LOGIN Y CREATE USERS㊙️🦊

## 🐰SignIn

**`GET /`**: Este endpoint se encarga de generar la token de usuario

tiene disponible las versiones:

-  1.0.0 

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint acepta la siguiente data:
```html
{
  "nombre" : "manuel",
  "contraseña" : "34554"
}
```

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5199/Login
```
**🧧Metodo HTTP🧧**

```html
POST
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
   	{
  "status": 201,
  "message": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoibWFudWVsIiwiY29ycmVvIjoic2phZGFkYXNAZ21haWwuY29tIiwicm9sIjoidXN1YXJpbyIsImlhdCI6MTY5OTU0ODg0MSwiZXhwIjoxNjk5NTUyNDQxfQ.i8IgQMYqPccEbl74zV9f-NFUi0GX9PpYsO33IiadQc4",
  "instructions": "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor, ¡esta llave tiene duracion de una hora!"
}
</details>

------

## 🐰SignUp

**`GET /`**: Este endpoint se encarga de crear usuarios

tiene disponible las versiones:

-  1.0.0 

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint acepta la siguiente data:
```html
{
  "nombre" : "manuel",
  "documento" : 213234,
  "correo" : "sjadadas@gmail.com",
  "telefono" : 123123213,
  "direccion" : "carrera 122 34234",
  "codigo_Postal" : "CP-454",
  "contraseña" : "34554",
  "rolFK" : 1,
  "tipoDocFK" : 1,
  "generoFK" : 1
}
```

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5199/SignUp
```
**🧧Metodo HTTP🧧**

```html
POST
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
   {
  "staus": 200,
  "message": "La data se ha enviado exitosamente a la tabla usuario"
}
</details>

------


## 🦊㊙️Cruds㊙️🦊

# 🎫/**Endpoints**🎫

**Todos los endpoints manejan el nombre de la coleccion y sus respectivos metodos. asi que vamos a simplificar todo en un sola instruccion**

### **colecciones disponibles para los endpoints**

```

| categoria_P       |
| genero            |
| marca_P           |
| metodo_Pago       |
| producto          |
| rol               |
| tipo_Documento    |
| tipo_P            |
| transaccion       |
| usuario  

```

------

## 🐰Metodo GET

**`GET /`**: Este endpoint se encarga de llamar la data de la coleccion en cuestion.

tiene disponible las versiones:

-  1.0.0 

🚨**Aclaraciones y Validaciones**🚨

- Este endpoint no acepta data de entrada

🔗**Ruta Especifica🔗**

```html
http://127.19.8.7:5199/<nombreColeccion>/
```
**🧧Metodo HTTP🧧**

```html
GET
```

🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  <details>
    <summary> <h3> Data de Salida </h3></summary> 
   	Este endpoint te devolvera una lista ordenada de datos que esten en la base de datos de la coleccion selecionada
</details>

la respuesta puede variar segun la version de la api
------

## 🚨Metodo Post

**`POST /`**:  Este endpoint se encarga de insertar una data a una coleccion en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Importante </h3></summary>
   <strong>Usa el archivo Postman para verificar la data de entrada de cada uno de los endpoints</strong>
</details>


tiene disponible las versiones:

-  1.0.0 (metodo post)

**Aclaraciones y Validaciones**

- Necesitas una token generada para usar ese endpoint en la version 1.1.0

**Ruta Especifica**

```html
http://127.19.8.7:5199/<nombreColeccion>/
```
**🧧Metodo HTTP🧧**

```html
POST
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Data enviada Correctamente"<br>
    }
   </details>
la respuesta puede variar segun la version de la api
------

## 🛃Metodo Put

**`PUT /`**:Este endpoint se encarga de actualizar la data a una coleccion en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Importante </h3></summary>
   <strong>Usa el archivo thunder para verificar la data de entrada de cada uno de los endpoints</strong>
</details>

tiene disponible las versiones:

-  1.0.3 (metodo put)
- 


**Ruta Especifica**

```html
http://127.19.8.7:5199/<nombreColeccion>?id=<id>
    
    Reemplaza <id> por el id de la data que quieras actualizar
```
**🧧Metodo HTTP🧧**

```html
PUT 
```
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

  

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento actualizado correctamente"<br>
    }
   </details>
   la respuesta puede variar segun la version de la api
------

## 💢Metodo Delete

**`DELETE /`**: Este endpoint se encarga de borrar un documento en una colección en cuestion.

🚨**Aclaraciones y Validaciones**🚨

  <details>
    <summary> <h3> Tipo De data </h3></summary>
    <strong>id:</strong> Id del alquiler a borrar (string or number)
</details>

tiene disponible las versiones:

-  1.0.4 (metodo delete)

**Ruta Especifica**

```html
http://127.19.8.7:5199/nombreColeccion>/
```
**🧧Metodo HTTP🧧**

```html
DELETE 
```
(recuerda solo debes poner el nombre de la coleccion que quieras manipular, si tienes dudas puedes apoyarte en el archivo thunder)
🎫**Respuesta**🎫
Si la solicitud es exitosa, recibirás una respuesta positiva

   <details>
    <summary> <h3> Data de entrada </h3></summary> 
  	{<br>
        "id": "10"<br>
}
 </details>

<details>
    <summary> <h3> Data de Salida </h3></summary> 
  	{<br>
    	status: 200, <br>
    	message: "Documento ha sido eliminado correctamente"<br>
    }
   </details>
la respuesta puede variar segun la version de la api
------

------

## **🐰🌌Thunder🌌🐰**

Para acceder a las consultas hechas en el proyecto utiliza el archivo thunde

- [Thunder Aqui](https://github.com/JuanJoseDuranRinconCAMPUS2/PushUpNike/blob/main/thunder/thunder-collection_NikeAPI.json)

------

¡Gracias por visitar mi proyecto!
