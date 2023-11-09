import express from "express";
import { loadEnv } from "vite";
import cors from "cors";

const env = loadEnv("development", process.cwd(), 'VITE');

const nikeApi = express();

nikeApi.use(express.json());
nikeApi.use(cors({
    origin: `http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'accept-version,Content-Type,Authorization',
    preflightContinue: false,
}));

const config = { "hostname": `${env.VITE_HOSTNAME}` , "port": `${env.VITE_PORT_BACKEND}`};

nikeApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})