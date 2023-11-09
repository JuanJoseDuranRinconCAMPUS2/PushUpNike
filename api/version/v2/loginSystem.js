import { SignJWT } from 'jose';
import { loadEnv } from 'vite';

const env = loadEnv("development", process.cwd(), 'NODE');

export const tokens = async (req, res) =>{
    if(!req.rateLimit) return;
    try {
      let data = req.body
      const encoder = new TextEncoder();
      const jwtconstructor = new SignJWT(Object.assign({}, data));
      const jwt = await jwtconstructor
      .setProtectedHeader({alg:"HS256", typ: "JWT"})
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(env.NODE_JWT_KEY));
      req.data = jwt;
      res.status(201).send({status: 201, message: jwt, instructions: "En el header de la peticion pon el header 'Authorization' y luego pon esta llave como valor, ¡esta llave tiene duracion de una hora!"});
  } catch (error) {
      res.status(404).send({status: 404, message: "Error al crear el Token", error: error});
  }

};