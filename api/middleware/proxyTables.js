import { Router } from "express";
import con from "../db/connect.js";

const validatorTables = async(req, res) =>{
    return new Promise((resolve, reject) => {
        con.query(
            /*SQL*/ `SHOW TABLES;`,
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
                        message: 'In the database not found tables'
                    });
                } else {
                    const listOfTables = data.map(table => Object.values(table)[0]);
                    resolve(listOfTables);
                }
            }
        );
    });
};

let proxyTables = (table) => {

    const proxyValidate = Router();

    proxyValidate.use(async(req, res, next)=>{
        try {
            let names = await validatorTables(req, res);
            const tableSelect = names.indexOf(table);
                if (tableSelect < 0) {
                    let mensaje = {status: 409, message: `La ruta:'${table}', no existe en el endpoint, por favor intentelo nuevamente`};
                    return res.status(409).send(mensaje);
                }
            next();
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "oh no, error encontrado",
                error: error
            });
        }
    });

    return proxyValidate
}
export {proxyTables};