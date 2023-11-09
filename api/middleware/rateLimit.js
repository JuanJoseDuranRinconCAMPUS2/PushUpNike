import rateLimit from "express-rate-limit";

export let limitPColecciones = (num, name) => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 10, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>num){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño de data es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: `Demasiadas consultas en un corto periodo de tiempo en el endpoint ${name}`
            })
        }
    })
}