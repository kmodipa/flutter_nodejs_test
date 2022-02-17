import { Request, Response } from "express";
import {
    CreateWeightInput, DeleteWeightInput, ReadWeightInput, UpdateWeightInput
} from "../schemas/weight.schema";
import {
    createWeight,
    deleteWeight,
    findAndUpdateWeight,
    findWeight, findWeights,
} from "../services/weight.service";

export async function createWeightHandler(
    req: Request<{}, {}, CreateWeightInput["body"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const body = req.body;

    const weight = await createWeight({ ...body, user: userId });

    return res.send(weight);
}

export async function updateWeightHandler(
    req: Request<UpdateWeightInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const weightId = req.params.weightId;
    const update = req.body;

    const weight = await findWeight({ weightId: weightId });

    if (!weight) {
        return res.sendStatus(404);
    }

    if (String(weight.user) !== userId) {
        return res.sendStatus(403);
    }

    const updatedWeight = await findAndUpdateWeight({ weightId: weightId }, update, {
        new: true,
    });

    return res.send(updatedWeight);
}

export async function getWeightHandler(
    req: Request<ReadWeightInput["params"]>,
    res: Response
) {
    const weightId = req.params.weightId;
    const weight = await findWeight({ weightId: weightId });

    if (!weight) {
        return res.sendStatus(404);
    }

    return res.send(weight);
}

export async function getWeightsHandler(
    req: Request,
    res: Response,
) {

    const weights = await findWeights();

    return res.send(weights);
}


export async function deleteWeightHandler(
    req: Request<DeleteWeightInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;
    const weightId = req.params.weightId;

    const weight = await findWeight({ weightId: weightId });

    if (!weight) {
        return res.sendStatus(404);
    }

    const result = await deleteWeight({ weightId: weightId });

    // return res.sendStatus(200);
    return res.send(result);
}