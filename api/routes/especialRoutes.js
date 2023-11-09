import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { limitPColecciones } from "../middleware/rateLimit.js";
import { getUsersInfo, getUsersInfoID, getproductosInfo, getproductosCaracteristica } from "../version/v1/especialR.js";
import proxyValidationTokens from "../middleware/validateJWT.js";

const especialApp = Router();
const version = routesVersioning();

especialApp.post("/User", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `User`)(req, res, (err) => {
            getUsersInfo(req, res);
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `User`)(req, res, (err) => {
            proxyValidationTokens(req, res, (err) => {
                getUsersInfo(req, res);
            });
        });
    }
}));

especialApp.post("/User/:id", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `User`)(req, res, (err) => {
            getUsersInfoID(req, res, `${req.params.id}`);
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `User`)(req, res, (err) => {
            proxyValidationTokens(req, res, (err) => {
                getUsersInfoID(req, res, `${req.params.id}`);
            });
        });
    }
}));

especialApp.post("/Producto", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `Producto`)(req, res, (err) => {
            getproductosInfo(req, res,);
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `Producto`)(req, res, (err) => {
            proxyValidationTokens(req, res, (err) => {
                getproductosInfo(req, res,);
            });
        });
    }
}));

especialApp.post("/Producto/:data", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `Producto`)(req, res, (err) => {
            getproductosCaracteristica(req, res,);
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `Producto`)(req, res, (err) => {
            proxyValidationTokens(req, res, (err) => {
                getproductosCaracteristica(req, res, `${req.params.data}`);
            });
        });
    }
}));

export default especialApp;