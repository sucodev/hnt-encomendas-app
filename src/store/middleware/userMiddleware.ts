import { createListenerMiddleware } from '@reduxjs/toolkit'
import Router from 'next/router';
import { CreateSessionService } from '../../services/CreateSessionService';
import { userAction } from '../slices';

const userMiddleware = createListenerMiddleware();

userMiddleware.startListening({
    actionCreator:userAction.userStarted,
    effect: async(action, listenerApi) => {

        const createSessionService = new CreateSessionService();

        const response = await createSessionService.run(action.payload.customerCPF);
        
        listenerApi.dispatch(userAction.userIsAuthenticating());

        if(response.error) { 
            listenerApi.dispatch(userAction.userAuthenticatedFailed({
                status: response.statusCode,
                message: response.message,
            }));
            return;
        }

        listenerApi.dispatch(userAction.userAuthenticatedSuccess({
            jwt: response.payload.customerJWT,
            user: {
                customerCPF: response.payload.customerCPF,
                customerName: response.payload.customerName,
                customerOrders: response.payload.customerOrders
            }
        }));

        Router.push('/meus-pedidos')

    }
});

export { userMiddleware }