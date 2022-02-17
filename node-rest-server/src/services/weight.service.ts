import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import WeightModel, {WeightDocument, WeightInput} from "../models/weight.model";


export async function createWeight(input: WeightInput) {
    try {
        const result = await WeightModel.create(input);
        return result;
    } catch (e) {
        throw e;
    }
}

export async function findWeight(
    query: FilterQuery<WeightDocument>,
    options: QueryOptions = { lean: true }
) {
    try {
        const result = await WeightModel.findOne(query, {}, options);
        return result;
    } catch (e) {
        throw e;
    }
}

export async function findWeights() {
    return WeightModel.find({}).lean();
}

export async function findAndUpdateWeight(
    query: FilterQuery<WeightDocument>,
    update: UpdateQuery<WeightDocument>,
    options: QueryOptions
) {
    return WeightModel.findOneAndUpdate(query, update, options);
}

export async function deleteWeight(query: FilterQuery<WeightDocument>) {
    return WeightModel.deleteOne(query);
}
