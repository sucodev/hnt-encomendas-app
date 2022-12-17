
import userReducer, { 
    userStarted, 
    userIsAuthenticating, 
    userAuthenticatedSuccess, 
    userAuthenticatedFailed, 
    userLogout  
} from './userSlice'

const userAction = {
    userStarted, 
    userIsAuthenticating, 
    userAuthenticatedSuccess, 
    userAuthenticatedFailed, 
    userLogout  
}

export { 
    userAction,
    userReducer
}