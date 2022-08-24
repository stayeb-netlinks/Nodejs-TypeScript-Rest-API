import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../service/session.service";
import { verifyJwt } from "../utils/jwt.utils";

export const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "headers.x-refreshtoken", "");
  //   console.log(req.headers.refreshtoken);
  //   console.log("Access------", accessToken);
  //   console.log("Refresh------", refreshToken);

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);
  //   console.log("decoded", decoded);

  //   everything working till this

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    // console.log("new access token: ", newAccessToken);
    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
      const result = verifyJwt(newAccessToken);
      res.locals.user = result.decoded;
    }
    // console.log("verify Refresh: ", result);
    return next();
  }

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next();
};
