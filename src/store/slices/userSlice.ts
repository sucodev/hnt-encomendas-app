import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        isLoading: false,
        isAuthenticating: false,
        isAuthenticated: false,
        authenticatedFailed: false,
        errorMessage: "",
        errorStatusCode: null,
        payload: { 
            jwt: null,
            user: null
        },
    },
    reducers: {
        userStarted(state, _action) { 
            state.isLoading = true;
        },
        userIsAuthenticating(state) {
            state.isLoading = true;
            state.isAuthenticating = true;
            state.isAuthenticated = false;
            state.authenticatedFailed = false;
            state.errorMessage =  '';
            state.errorStatusCode =  null;
        },
        userAuthenticatedSuccess(state, action) {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.isAuthenticating = false;
            state.payload.jwt = action.payload.jwt;
            state.payload.user = action.payload.user;
        },
        userAuthenticatedFailed(state, action) { 
            state.isLoading = false;
            state.isAuthenticated = false;
            state.isAuthenticating = false;
            state.authenticatedFailed = true;
            state.errorMessage = action.payload.message;
            state.errorStatusCode = action.payload.status;
        },
        userLogout(state, action) {
            state.isLoading = false;
            state.isAuthenticating = false;
            state.isAuthenticated = false;
            state.authenticatedFailed = false;
            state.errorMessage = "";
            state.errorStatusCode = null;
            state.payload.jwt = null;
            state.payload.user = null;
        }
    }
})


export const { userStarted, userIsAuthenticating, userAuthenticatedSuccess, userAuthenticatedFailed, userLogout } = userSlice.actions
export default userSlice.reducer;