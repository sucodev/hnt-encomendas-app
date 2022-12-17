import { apiInstance } from "../backend"

interface ICreateSessionServiceProps {
    error: boolean;
    payload: any;
    message: string;
    statusCode: number;
}

class CreateSessionService { 
    
    async run(customerCPF: string): Promise<ICreateSessionServiceProps>{
        try {
            const response = await apiInstance.post('/auth', { customerCPF });

            return {
                error: response.data.error,
                payload: response.data.payload,
                message: response.data.message,
                statusCode: response.data.statusCode
            };    

        } catch(error: any) { 
            console.log("err =>: ", error);

            return {
                error: true,
                payload: null,
                message: error.response.data.message,
                statusCode: error.response.status
            };
        }
    }
}

export { CreateSessionService }