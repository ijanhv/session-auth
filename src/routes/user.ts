import express from 'express'

import { deleteUser, getAllUsers, updateUser } from '../controllers/user'
import { isAuthenticated, isOwner } from '../middleware/index'

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers)
    router.delete("/user/:id", isAuthenticated, isOwner, deleteUser)
    router.patch("/users/:id", isAuthenticated, isOwner, updateUser)


}