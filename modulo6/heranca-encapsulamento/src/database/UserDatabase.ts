import { BaseDatabase } from "./BaseDatabase"
import { User } from "../models/User"
import { TABLE_USERS } from "./tableNames"


export class UserDatabase extends BaseDatabase{
    
    protected static tableName = "Labe_Users"

    public getAllUsers =async () => {
        const result = await UserDatabase.connection(UserDatabase.tableName).select()
        return result
    }

    public createUser = async (newUser: User) =>{
        await UserDatabase.connection(TABLE_USERS).insert(newUser)
    }

    public getUserById = async (id: string) => {
        const result = await UserDatabase.connection(`${TABLE_USERS}`)
        .select(id)
        .where(`id`, `=`, `${id}`)
        return result
    }
}