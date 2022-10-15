import { v4 as uuidv4 } from 'uuid'

let userId
export const SET_USERID = () => {
    userId = localStorage.getItem('userTempId')
    if(!userId) {
        userId = uuidv4()
        localStorage.setItem('userTempId',userId)
    }
    return userId
}