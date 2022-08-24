import jwt from "jsonwebtoken";
import config from "config";
import logger from "./logger";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  // logger.info("Hello", privateKey);
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    // console.log("decode from verifyJWT", decoded);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    // console.log("catch from verifyJwt");
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}
