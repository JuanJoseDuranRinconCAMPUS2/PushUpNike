import con from "../../db/connect.js";

export const getUniversalv1 = async (req, res, tabla) =>{
    if(!req.rateLimit) return;
    con.query(
         /*SQL*/ `SELECT * FROM ${tabla};`,
        (err,data,fil)=>{
            if (data != null) {
            if (data.length == 0) {
                return res.status(500).send({
                status: 500,
                message: `No hay data disponible en la tabla ${tabla}`
                });
            } else {
                data = JSON.stringify(data);
                return res.send(JSON.parse(data));
            }
            };
            res.status(500).send({
            status: 500,
            message: "oh no , error encontrado",
            error: err
            });
        }
    );
};

export const postUniversalv1 = async (req, res, tabla) =>{
    if(!req.rateLimit) return;
    let data = {...req.body};

    con.query(
        /*SQL*/ `INSERT INTO ${tabla} SET ?;`,
        data,
        (err,data,fil)=>{
            if (err) {
                return res.status(500).send({
                  staus: 500,
                  message: `Error encontrado en la tabla ${tabla}`,
                  error: err
                });
            } 
            return res.status(200).send({
              staus: 200,
              message: `La data se ha enviado exitosamente a la tabla ${tabla}`
            });
        }
    );
};

export const putUniversalv1 = async (req, res, tabla) =>{
    if(!req.rateLimit) return;
    let id = parseInt(req.query.id);
    let data = {...req.body};

    if (!(typeof(id) == "number")) {
        return res.status(500).send({
          staus: 500,
          message: `Error encontrado en la tabla ${tabla}`,
          error: `El valor de id en el query: ${id} debe ser un numero`
        });
    }

    con.query(
        /*SQL*/ `UPDATE ${tabla} SET ? WHERE id = ${id};`,
        data,
        (err,data,fil)=>{
            if (err) {
                return res.status(500).send({
                  staus: 500,
                  message: `Error encontrado en la tabla ${tabla}`,
                  error: err
                });
            } 
            if(data["changedRows"]  == 0) return res.status(200).send({ status: 200, message: `El ${tabla} con el id ${id} no ha tenido ningun cambio en la tabla ${tabla}`,});
            return res.status(200).send({
                staus: 200,
                message: `La data se ha actualizado exitosamente a la tabla ${tabla}`
            });
        }
    );
};

export const deleteUniversalv1 = async (req, res, tabla) =>{
    if(!req.rateLimit) return;
    let id = parseInt(req.query.id);
    let data = {...req.body};
    
    if (!(typeof(id) == "number")) {
        return res.status(500).send({
          staus: 500,
          message: `Error encontrado en la tabla ${tabla}`,
          error: `El valor de id en el query: ${id} debe ser un numero`
        });
    } 

    con.query(
        /*SQL*/ `DELETE FROM ${tabla} WHERE id = ${id};`,
    
        (err,data,fil)=>{
            if (err) {
                return res.status(500).send({
                  staus: 500,
                  message: `Error encontrado en la tabla ${tabla}`,
                  error: err
                });
            } 
            if(data["affectedRows"]  == 0) return res.status(200).send({ status: 200, message: `El ${tabla} con el id ${id} no ha tenido ningun cambio en la tabla ${tabla}`,});
            return res.status(200).send({
                staus: 200,
                message: `La data se ha borrado exitosamente en la tabla ${tabla}`
            });
        }
    );
};