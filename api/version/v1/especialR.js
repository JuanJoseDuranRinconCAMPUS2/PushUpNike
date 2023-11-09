import con from "../../db/connect.js";

export const getUsersInfo = async (req, res) =>{
    if(!req.rateLimit) return;
    con.query(
         /*SQL*/ `SELECT u.id, u.nombre, u.documento, u.correo, u.telefono, u.direccion, u.codigo_Postal, r.nombre AS rol , t.nombre AS tipoDoc , g.nombre AS genero
        FROM usuario u JOIN rol r ON u.rolFk = r.id 
        JOIN tipo_Documento t ON u.tipoDocFk = t.id 
        JOIN genero g ON u.generoFK = g.id;`,
        (err,data,fil)=>{
            if (data != null) {
            if (data.length == 0) {
                return res.status(500).send({
                status: 500,
                message: `No hay data disponible en la operacion`
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

export const getUsersInfoID = async (req, res) =>{
    if(!req.rateLimit) return;
    let id = parseInt(req.params.id);
    if (!(typeof(id) == "number")) {
        return res.status(500).send({
          staus: 500,
          message: `Error encontrado en la operacion`,
          error: `El valor de id en el query: ${id} debe ser un numero`
        });
    }

    con.query(
         /*SQL*/ `SELECT u.id, u.nombre, u.documento, u.correo, u.telefono, u.direccion, u.codigo_Postal, r.nombre AS rol , t.nombre AS tipoDoc , g.nombre AS genero
        FROM usuario u JOIN rol r ON u.rolFk = r.id 
        JOIN tipo_Documento t ON u.tipoDocFk = t.id 
        JOIN genero g ON u.generoFK = g.id WHERE u.id = ${id};`,
        (err,data,fil)=>{
            if (data != null) {
            if (data.length == 0) {
                return res.status(500).send({
                status: 500,
                message: `No hay data disponible en la operacion`
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

export const getproductosInfo = async (req, res) =>{
    if(!req.rateLimit) return;
    con.query(
         /*SQL*/ `SELECT p.id, p.nombre, p.descripcion, p.precio, p.caracteristicas, m.nombre AS marca, t.nombre AS tipo, g.nombre AS genero, c.nombre AS categoria FROM producto p
        JOIN marca_P m ON p.marcaFk = m.id
        JOIN tipo_P t ON p.tipoFk = t.id
        JOIN genero g ON p.generoFk = g.id
        JOIN categoria_P c ON p.categoriaFK = c.id;`,
        (err,data,fil)=>{
            if (data != null) {
            if (data.length == 0) {
                return res.status(500).send({
                status: 500,
                message: `No hay data disponible en la operacion`
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

export const getproductosCaracteristica = async (req, res, data) =>{
    if(!req.rateLimit) return;
    con.query(
         /*SQL*/ `SELECT p.id, p.nombre, p.descripcion, p.precio, p.caracteristicas, m.nombre AS marca, t.nombre AS tipo, g.nombre AS genero, c.nombre AS categoria FROM producto p
        JOIN marca_P m ON p.marcaFk = m.id
        JOIN tipo_P t ON p.tipoFk = t.id
        JOIN genero g ON p.generoFk = g.id
        JOIN categoria_P c ON p.categoriaFK = c.id WHERE ${data};`,
        (err,data,fil)=>{
            if (data != null) {
            if (data.length == 0) {
                return res.status(500).send({
                status: 500,
                message: `No hay data disponible en la operacion`
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
