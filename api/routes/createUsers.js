import { Router } from "express";
import { limitPColecciones } from "../middleware/rateLimit.js";
import { postUniversalv1 } from "../version/v1/universalCruds.js";
import routesVersioning from "express-routes-versioning";
import { loadEnv } from "vite";

import con from "../db/connect.js";
import { SignJWT } from 'jose';

const env = loadEnv("development", process.cwd(), 'NODE');
const version = routesVersioning();
const appCreateUser = Router();

appCreateUser.post("/", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(2500, `${req.params.Table}`)(req, res, (err) => {
                postUniversalv1(req, res, `usuario`);
        });
    }
}));

export default appCreateUser;