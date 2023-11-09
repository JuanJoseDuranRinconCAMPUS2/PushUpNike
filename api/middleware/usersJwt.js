import { Router } from "express";
import con from "../db/connect.js";

const validatorUsers = async(req, res) =>{
    return new Promise((resolve, reject) => {
        con.query(
            /*SQL*/ `SELECT id FROM usuario WHERE nombre = "${req.body.nombre}" AND contraseña = "${req.body.contraseña}";`,
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
                        message: 'Error encontrado, credenciales no validas revise su usuario y contraseña'
                    });
                } else {
                    const idUser = data[0].id
                    resolve(idUser);
                }
            }
        );
    });
};



const proxyUsers = Router();

proxyUsers.use(async(req, res, next)=>{
    try {
        let id = await validatorUsers(req, res);
        con.query(
            /*SQL*/ `SELECT u.id, u.nombre, u.correo, r.nombre as rol FROM usuario u JOIN rol r ON ${id} = r.id;`,
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
                        message: 'Error encontrado, credenciales no validas revise su usuario y contraseña'
                    });
                } else {
                    const dataU = data[0]
                    req.body = dataU;
                    next();
                }
            }
        );
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "oh no, error encontrado",
            error: error
        });
    }
});


export {proxyUsers};