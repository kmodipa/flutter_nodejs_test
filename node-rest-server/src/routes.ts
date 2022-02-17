import {Express, Request, Response} from 'express';
import validateResource from "./middleware/validateResource";
import {createUserHandler} from "./controllers/user.controller";
import {createUserSchema} from "./schemas/user.schema";
import {createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler} from "./controllers/session.crotroller";
import {createSessionSchema} from "./schemas/session.schema";
import requireUser from "./middleware/requireUser";
import {
    createWeightSchema,
    deleteWeightSchema,
    getWeightSchema,
    updateWeightSchema
} from "./schemas/weight.schema";
import {
    createWeightHandler,
    deleteWeightHandler,
    getWeightHandler,
    getWeightsHandler,
    updateWeightHandler
} from "./controllers/weight.controller";

function routes(app: Express) {
    /* Endpoint to test health/status of the Application */
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/api/sign_up", validateResource(createUserSchema), createUserHandler);

    /* Session EndPoints
    * */
    app.post("/api/login", validateResource(createSessionSchema), createUserSessionHandler);
    

    /* Weight EndPoints
    * */
    app.post(
        "/api/save_weight",
        [requireUser, validateResource(createWeightSchema)],
        createWeightHandler
    );

    app.put(
        "/api/update_weight/:weightId",
        [requireUser, validateResource(updateWeightSchema)],
        updateWeightHandler
    );

    app.get(
        "/api/get_weight/:weightId",
        validateResource(getWeightSchema),
        getWeightHandler
    );

    app.get(
        "/api/get_weight_history",
        getWeightsHandler
    );

    app.delete(
        "/api/delete_weight/:weightId",
        [requireUser, validateResource(deleteWeightSchema)],
        deleteWeightHandler
    );
}

export default routes