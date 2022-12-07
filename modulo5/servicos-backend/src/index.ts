import app from "./app"
import createUser from './endpoints/createUser'
import testAddress from "./endpoints/test"


app.post('/users/signup', createUser)

app.post('/test', testAddress)