import express from "express";
import { loadEnv } from "vite";
import crudsApp from "./routes/Cruds.js";
import appIngresorUsuarios from "./routes/login.js";
import appCreateUser from "./routes/createUsers.js";
import especialApp from "./routes/especialRoutes.js";

import cors from "cors";

const env = loadEnv("development", process.cwd(), 'VITE');
console.clear();
const nikeApi = express();

nikeApi.use(express.json());
nikeApi.use(cors({
    origin: `http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'accept-version,Content-Type,Authorization',
    preflightContinue: false,
}));

// cruds
nikeApi.use("/Crud", crudsApp);

// login
nikeApi.use("/Login", appIngresorUsuarios);

// Create user
nikeApi.use("/SignUp", appCreateUser);

// Create user
nikeApi.use("/Especial", especialApp);

const config = { "hostname": `${env.VITE_HOSTNAME}` , "port": `${env.VITE_PORT_BACKEND}`};

nikeApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})