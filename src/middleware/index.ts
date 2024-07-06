import express from "express";

import { get, identity, merge } from "lodash";
import { getUserBySessionToken } from "../models/user";

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id");
    

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if ((currentUserId as string).toString() !== id) {
      return res.sendStatus(403);
    }

    next()
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["MY-COOKIE"];
    if (!sessionToken) {
      res.status(403)
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      res.status(403)
    }

    merge(req, { identity: existingUser });

    

    return next();
  } catch (error) {
    console.log(error);
    res.status(403)
  }
};
