import express from "express";

import { deleteUserById, getUserById, getUsers } from "../models/user";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.sendStatus(400);
  }
};


export const updateUser = async (
    req: express.Request,
  res: express.Response
) => {
    try {
        const { id } = req.params;
        const { username } = req.body
    
        const user = await getUserById(id)

        if(!user) {
            return res.sendStatus(403)
        }

        user.username = username

        user.save()

        return res.status(200).json(user).end()
      } catch (error) {
        return res.sendStatus(400);
      }
}