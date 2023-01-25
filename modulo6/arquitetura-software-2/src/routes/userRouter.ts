import express from 'express'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../data/UserDatabase'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/create", userController.create)

userRouter.get("/getUsers", UserDatabase.getUsers)


