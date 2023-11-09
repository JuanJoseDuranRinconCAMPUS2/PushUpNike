import express from 'express';
import con from '../db/connect.js';
import { jwtVerify } from 'jose';
import { loadEnv } from 'vite';

const env = loadEnv("development", process.cwd(), 'NODE');
  
let proxyValidationTokens = express();

proxyValidationTokens.use(async(req, res, next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, message: "Token not sent"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
          encoder.encode(env.NODE_JWT_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {;
        res.status(498).send({status: 498, token: "Token caducado", error: error});
    }
});

export default proxyValidationTokens;