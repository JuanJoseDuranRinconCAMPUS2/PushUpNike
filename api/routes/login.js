import { Router } from "express";
import { limitPColecciones } from "../middleware/rateLimit.js";
import { loadEnv } from "vite";
import { tokens } from "../version/v2/loginSystem.js";
import con from "../db/connect.js";

const appIngresorUsuarios = Router();

appIngresorUsuarios.post('/', limitPColecciones(400, "Login"), tokens)

export default appIngresorUsuarios;