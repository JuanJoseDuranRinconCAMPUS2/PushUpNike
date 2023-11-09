import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { limitPColecciones } from "../middleware/rateLimit.js";
import { proxyTables } from "../middleware/proxyTables.js";
import { getUniversalv1, postUniversalv1, putUniversalv1, deleteUniversalv1 } from "../version/v1/universalCruds.js";
import proxyValidationTokens from "../middleware/validateJWT.js";
const crudsApp = Router();
const version = routesVersioning();

crudsApp.get("/:Table", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                getUniversalv1(req, res, `${req.params.Table}`);
            });
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                proxyValidationTokens(req, res, (err) => {
                    getUniversalv1(req, res, `${req.params.Table}`);
                });
            });
        });
    }
}));

crudsApp.post("/:Table", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1500, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                postUniversalv1(req, res, `${req.params.Table}`);
            });
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                proxyValidationTokens(req, res, (err) => {
                    postUniversalv1(req, res, `${req.params.Table}`);
                });
            });
        });
    }
}));

crudsApp.put("/:Table", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1500, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                putUniversalv1(req, res, `${req.params.Table}`);
            });
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                proxyValidationTokens(req, res, (err) => {
                    putUniversalv1(req, res, `${req.params.Table}`);
                });
            });
        });
    }
}));

crudsApp.delete("/:Table", version({
    "1.0.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                deleteUniversalv1(req, res, `${req.params.Table}`);
            });
        });
    },
    "1.1.1": (req, res, next) => {
        limitPColecciones(1, `${req.params.Table}`)(req, res, (err) => {
            proxyTables(`${req.params.Table}`)(req, res, (err) => {
                proxyValidationTokens(req, res, (err) => {
                    deleteUniversalv1(req, res, `${req.params.Table}`);
                });
            });
        });
    }
}));

export default crudsApp