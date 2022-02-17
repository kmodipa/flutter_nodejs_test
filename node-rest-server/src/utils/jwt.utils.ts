import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("accessTokenPrivateKey");
const publicKey = config.get<string>("accessTokenPublicKey");

export function signJwt( object: Object, options?: jwt.SignOptions | undefined) {
    try {
        return jwt.sign(object, privateKey, {...(options && options), algorithm: "RS256"});
    } catch(e: any) {
        return {
            valid: false,
            expired: "signJwt " + e.message,
            decoded: null
        };
    }
}

export function verifyJwt(token: string) {
    try {
        console.log(token, publicKey)
        console.log('before verify')
        const decoded = jwt.verify(token, publicKey);
        console.log('after verify')
        console.log('jwt verify', decoded)
        return {
            valid: true,
            expired: false,
            decoded
        };
    } catch (e: any) {
        return {
            valid: false,
            expired: "verifyTwt " + e.message,
            decoded: null
        };
    }
}