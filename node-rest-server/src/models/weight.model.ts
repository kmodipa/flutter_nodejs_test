import mongoose, {Schema} from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface WeightInput {
    user: UserDocument["_id"];
    weight: number;
}

export interface WeightDocument extends WeightInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const WeightSchema = new mongoose.Schema(
    {
        weightId: {
            type: String,
            required: true,
            unique: true,
            default: () => `weight_${nanoid()}`,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        weight: { type: Number, required: true }
    },
    {
        timestamps: true,
    }
);

const WeightModel = mongoose.model<WeightDocument>("Weight", WeightSchema);

export default WeightModel;