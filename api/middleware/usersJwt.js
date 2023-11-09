import { Router } from "express";
import con from "../db/connect.js";

const validatorUsers = async(req, res) =>{
    return new Promise((resolve, reject) => {
        con.query(
            /*SQL*/ `SELECT id FROM usuario WHERE nombre = ${req.nombre} AND contraseña = ${req.contraseña};`,
            (err, data, fill) => {
                if (err) {
                    return res.status(500).send({
                        status: 500,
                        message: err
                    });
                }
                if (data.length == 0) {
                    return res.status(200).send({
                        status: 200,
                        message: 'NO'
                    });
                } else {
                    const idUser = data.id 
                    resolve(idUser);
                }
            }
        );
    });
};



const proxyUsers = Router();

proxyUsers.use(async(req, res, next)=>{
    try {
        let names = await validatorUsers(req, res);
        next();
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "oh no, error encontrado",
            error: error
        });
    }
});


export {proxyUsers};