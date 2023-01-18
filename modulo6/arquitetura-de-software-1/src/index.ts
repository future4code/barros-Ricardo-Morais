
import { app } from "./app"
import { UserController } from "./controller/UserController"
import { createTask } from './endpoints/createTask'


const userController = new UserController()

app.get('/user', userController.findUser)
app.post('/user', userController.createUser)

// app.post('/task', createTask)


