import { object, number, string, TypeOf } from "zod";

const payload = {
    body: object({
        weight: number({
            required_error: "Weight is required",
        })
    })
};

const params = {
    params: object({
        weightId: string({
            required_error: "weightId is required",
        }),
    })
};

export const createWeightSchema = object({
    ...payload,
});

export const updateWeightSchema = object({
    ...payload,
    ...params,
});

export const deleteWeightSchema = object({
    ...params,
});

export const getWeightSchema = object({
    ...params,
});

export type CreateWeightInput = TypeOf<typeof createWeightSchema>;
export type UpdateWeightInput = TypeOf<typeof updateWeightSchema>;
export type ReadWeightInput = TypeOf<typeof getWeightSchema>;
export type DeleteWeightInput = TypeOf<typeof deleteWeightSchema>;